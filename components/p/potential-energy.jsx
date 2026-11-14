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
		"content": `<style>.dfu7ombtf {
  d: path("M4.5 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m11.5 3V21m-2.25-8.25L16 10.5l2.25 2.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jd7wqibwu {
  d: path("M2.5 21h19m-19-10.5H11V21");
}
</style><g class="hntgybcog"><path class="jd7wqibwu"/><path class="dfu7ombtf"/></g>`,
		"fallback": "uix:potential-energy",
	});
}

export default Component;
