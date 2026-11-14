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
		"content": `<style>.ds3qmebyn {
  d: path("M2.5 21.5q3.5-6 8-8.5l4.75-5.25M10.5 13l-4-4.25m4 4.25l5.25 2.75");
}

.fukd2hq3y {
  d: path("M5.25 4.75a1.5 1.5 0 1 1 2.5 0a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5m11 .5a1.5 1.5 0 1 1 2.5 0a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5m-.5 10.5a1.5 1.5 0 1 1 2.5 0a1.5 1.5 0 1 1 1 2.5a1.5 1.5 0 1 1-2.25 1.5a1.5 1.5 0 1 1-2.25-1.5a1.5 1.5 0 1 1 1-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="fukd2hq3y"/><path class="ds3qmebyn"/></g>`,
		"fallback": "uix:spring-blossom",
	});
}

export default Component;
