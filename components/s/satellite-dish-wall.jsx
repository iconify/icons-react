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
		"content": `<style>.tf328g7_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5a6.75 6.75 0 0 0 9.5 9.5ZM6 13l-3 4.5m7.75-9.25L15 4M3 14.5V21m12.986-3.946l1.5-1.375a1.5 1.5 0 0 1 2.028 0l1.5 1.375a1.5 1.5 0 0 1 .486 1.106V20a1.5 1.5 0 0 1-1.5 1.5h-3a1.5 1.5 0 0 1-1.5-1.5v-1.84a1.5 1.5 0 0 1 .486-1.106");
}
</style><path class="tf328g7_b"/>`,
		"fallback": "uix:satellite-dish-wall",
	});
}

export default Component;
