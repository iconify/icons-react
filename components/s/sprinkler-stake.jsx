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
		"content": `<style>.e9rmqq_op {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 8h2a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 13 11.5h-2a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 11 8m1 3.5za1.292 1.292 0 0 1 1.277 1.483L12.75 16.5a.758.758 0 0 1-1.5 0l-.527-3.517A1.292 1.292 0 0 1 12 11.5M3 18h18M10 5Q6.5 1.5 3 6.5M14 5q3.5-3.5 7 1.5");
}
</style><path class="e9rmqq_op"/>`,
		"fallback": "uix:sprinkler-stake",
	});
}

export default Component;
