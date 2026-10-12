import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ij4fa_x3s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 13.5V6.9l-.002-.58l.502-.29l3.75-2.25l.745-.43l.005.86v9.29Zm-1.75 0h8.5v7.75h-8.5zm0 3h8.5");
}
</style><path class="ij4fa_x3s"/>`,
		"fallback": "iconoven:lipstick-heart-sharp",
	});
}

export default Component;
