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
		"content": `<style>.c-12rl91b {
  d: path("M6 5.5a6 3 0 1 0 12 0a6 3 0 1 0-12 0m6 3v2m0 0c-4 0-7 2-8 6m8-6c-2 1.25-3.5 3-3.5 6m3.5-6c2 1.25 3.5 3 3.5 6m-3.5-6c4 0 7 2 8 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jm--n2byi {
  d: path("M2.5 16.5q2.375-1.25 4.75 0t4.75 0t4.75 0t4.75 0M6 20.5q2-1.25 4 0t4 0t4 0");
}
</style><g class="hntgybcog"><path class="c-12rl91b"/><path class="jm--n2byi"/></g>`,
		"fallback": "uix:mangrove-swamp",
	});
}

export default Component;
