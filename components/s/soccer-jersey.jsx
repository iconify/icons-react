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

.jv4k-cbwj {
  d: path("M7 3h10a3.5 3.5 0 0 1 3.5 3.5v11A3.5 3.5 0 0 1 17 21H7a3.5 3.5 0 0 1-3.5-3.5v-11A3.5 3.5 0 0 1 7 3");
}

.y5q52dczf {
  d: path("M9 3a3 3 0 0 0 6 0M8 9v12m8-12v12");
}
</style><g class="hntgybcog"><path class="jv4k-cbwj"/><path class="y5q52dczf"/></g>`,
		"fallback": "uix:soccer-jersey",
	});
}

export default Component;
