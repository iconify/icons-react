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
		"content": `<style>.y0owg1bmf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 5.5h16A1.5 1.5 0 0 1 21.5 7A1.5 1.5 0 0 1 20 8.5H4A1.5 1.5 0 0 1 2.5 7A1.5 1.5 0 0 1 4 5.5m1 3h3A1.5 1.5 0 0 1 9.5 10v7.5A1.5 1.5 0 0 1 8 19H5a1.5 1.5 0 0 1-1.5-1.5V10A1.5 1.5 0 0 1 5 8.5m11 0h3a1.5 1.5 0 0 1 1.5 1.5v7.5A1.5 1.5 0 0 1 19 19h-3a1.5 1.5 0 0 1-1.5-1.5V10A1.5 1.5 0 0 1 16 8.5m-12.5 5h6m5 0h6");
}
</style><path class="y0owg1bmf"/>`,
		"fallback": "uix:pedestal-desk",
	});
}

export default Component;
