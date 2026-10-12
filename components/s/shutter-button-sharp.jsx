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
		"content": `<style>.uhwdbjbpd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 15.25h14.5v6H4.75zM8 10.75h8v4.5H8zm4-8v5M9.75 5.5L12 7.75l2.25-2.25");
}
</style><path class="uhwdbjbpd"/>`,
		"fallback": "iconoven:shutter-button-sharp",
	});
}

export default Component;
