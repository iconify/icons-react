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

.nthnoib9k {
  d: path("m9 11l3-3l3 3");
}

.pxs7obchh {
  d: path("M8.5 4.5h7A3.5 3.5 0 0 1 19 8v8a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 5 16V8a3.5 3.5 0 0 1 3.5-3.5M12 8v8");
}
</style><g class="hntgybcog"><path class="pxs7obchh"/><path class="nthnoib9k"/></g>`,
		"fallback": "uix:this-way-up",
	});
}

export default Component;
