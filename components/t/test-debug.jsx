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
		"content": `<style>.fp4pj_bcv {
  d: path("M9 5za3.5 3.5 0 0 1 3.5 3.5v3A3.5 3.5 0 0 1 9 15a3.5 3.5 0 0 1-3.5-3.5v-3A3.5 3.5 0 0 1 9 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7w55nbas {
  d: path("M6.75 5.75a2.25 2.25 0 0 1 4.5 0M3 8l2.5 1M3 11.5h2.5M3 15l2.5-1m7-5L15 8m-2.5 3.5H15m-2.5 2.25l1.791.179M15.25 18a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M20 20l1.75 1.75");
}
</style><g class="hntgybcog"><path class="fp4pj_bcv"/><path class="j7w55nbas"/></g>`,
		"fallback": "uix:test-debug",
	});
}

export default Component;
