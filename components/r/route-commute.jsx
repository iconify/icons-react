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
		"content": `<style>.i9w7l8bfr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.098 14.977l2.25-1.969a1.75 1.75 0 0 1 2.304 0l2.25 1.969a1.75 1.75 0 0 1 .598 1.317v2.956A1.75 1.75 0 0 1 8.75 21h-4.5a1.75 1.75 0 0 1-1.75-1.75v-2.956a1.75 1.75 0 0 1 .598-1.317M15.625 5h3.25A2.625 2.625 0 0 1 21.5 7.625v1.25a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 13 8.875v-1.25A2.625 2.625 0 0 1 15.625 5M15.5 5V3H19v2M6.5 12v-2a2 2 0 0 1 2-2H13");
}
</style><path class="i9w7l8bfr"/>`,
		"fallback": "uix:route-commute",
	});
}

export default Component;
