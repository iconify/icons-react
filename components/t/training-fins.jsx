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
		"content": `<style>.c683jv-_q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19v-5.5l-2.5-10q3.25-1 6.5 0V19a2 2 0 0 1-4 0m10 0V3.5q3.25-1 6.5 0l-2.5 10V19a2 2 0 0 1-4 0M5 13.5h4m6 0h4");
}
</style><path class="c683jv-_q"/>`,
		"fallback": "uix:training-fins",
	});
}

export default Component;
