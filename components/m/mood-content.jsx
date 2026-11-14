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

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}

.y0dlr-b_a {
  d: path("M7.5 10a1.5 1.5 0 0 1 3 0m3 0a1.5 1.5 0 0 1 3 0M8 14.5a4.5 4.5 0 0 0 8 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="y0dlr-b_a"/></g>`,
		"fallback": "uix:mood-content",
	});
}

export default Component;
