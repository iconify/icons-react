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

.jbaeosgpd {
  d: path("M9.25 15a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}

.v3j1vab2v {
  d: path("M5.5 15a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m1-9.5C8 3 10 7.5 12 5s4 2 5.5-.5");
}
</style><g class="hntgybcog"><path class="v3j1vab2v"/><path class="jbaeosgpd"/></g>`,
		"fallback": "uix:smoke-detected",
	});
}

export default Component;
