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

.q5w2-zbce {
  d: path("M10 13v-2.5L12.5 8m2.25 10l2 2L21 15.75");
}

.sepj3ccwf {
  d: path("M3.5 8.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0M10 15v6.5");
}
</style><g class="hntgybcog"><path class="sepj3ccwf"/><path class="q5w2-zbce"/></g>`,
		"fallback": "uix:tree-check",
	});
}

export default Component;
