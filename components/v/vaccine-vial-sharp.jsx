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
		"content": `<style>.w_ha0w66u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.75h6.5v3.5h-6.5zM10 6.25h4v2l2.75.786V21.25h-9.5V9.036L10 8.25ZM7.25 13.5h9.5m-9.5 4h9.5");
}
</style><path class="w_ha0w66u"/>`,
		"fallback": "iconoven:vaccine-vial-sharp",
	});
}

export default Component;
