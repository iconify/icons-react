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
		"content": `<style>.ux5rrx1ev {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 17.5l7-11m-7.25 1a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4 9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m9.75 4V4m-3.5 3.5L17 4l3.5 3.5");
}
</style><path class="ux5rrx1ev"/>`,
		"fallback": "uix:trend-percent-up",
	});
}

export default Component;
