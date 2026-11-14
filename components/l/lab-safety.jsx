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
		"content": `<style>.e9fltbcec {
  d: path("m14.75 18l2 2L21 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wsub76biy {
  d: path("M13.831 21H3V10.5L12 3l9 7.5v2.469m0 6.7V21h-1.269");
}
</style><g class="hntgybcog"><path class="wsub76biy"/><path class="e9fltbcec"/></g>`,
		"fallback": "uix:lab-safety",
	});
}

export default Component;
