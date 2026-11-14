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

.i35mcbc1x {
  d: path("M7.25 7.5q1.5-1.25 3 0m3.5 0q1.5-1.25 3 0M9 10.5h.01m5.99 0h.01M10 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="i35mcbc1x"/></g>`,
		"fallback": "uix:mood-surprised",
	});
}

export default Component;
