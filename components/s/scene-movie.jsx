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

.p5m1chsdn {
  d: path("M9.75 7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m4 6.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-8 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.yaqw_gxbu {
  d: path("M2.5 11.5a9 9 0 1 0 18 0a9 9 0 1 0-18 0m9 9h10");
}
</style><g class="hntgybcog"><path class="yaqw_gxbu"/><path class="p5m1chsdn"/></g>`,
		"fallback": "uix:scene-movie",
	});
}

export default Component;
