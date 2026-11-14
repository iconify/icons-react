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
		"content": `<style>.c2cdlvgea {
  d: path("M7.5 10.5q1.5-1.5 3 0m3 0q1.5-1.5 3 0M8 17.25c1-1.75 2.5-1.75 4-.75c1.5-1 3-1 4 .75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="c2cdlvgea"/></g>`,
		"fallback": "uix:mood-guilty",
	});
}

export default Component;
