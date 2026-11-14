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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-oy4mbgz {
  d: path("M6.75 10zA1.25 1.25 0 0 1 8 11.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 6.75 10m4 0zA1.25 1.25 0 0 1 12 11.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 10.75 10m4 0zA1.25 1.25 0 0 1 16 11.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 14.75 10m4 0zA1.25 1.25 0 0 1 20 11.25a1.25 1.25 0 0 1-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 18.75 10M5.5 14.5H20M3.75 12h.01");
}

.yzkyxjbnn {
  d: path("M3.75 7.5h16.5A1.75 1.75 0 0 1 22 9.25v5.5a1.75 1.75 0 0 1-1.75 1.75H3.75A1.75 1.75 0 0 1 2 14.75v-5.5A1.75 1.75 0 0 1 3.75 7.5");
}
</style><g class="hntgybcog"><path class="yzkyxjbnn"/><path class="x-oy4mbgz"/></g>`,
		"fallback": "uix:patch-panel",
	});
}

export default Component;
