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

.jfoyb2buv {
  d: path("M11.25 16h1.5a1.75 1.75 0 0 1 1.75 1.75v.5A1.75 1.75 0 0 1 12.75 20h-1.5a1.75 1.75 0 0 1-1.75-1.75v-.5A1.75 1.75 0 0 1 11.25 16");
}

.r2z3dlekd {
  d: path("M8.5 6.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M5 21.5v-4A4.5 4.5 0 0 1 9.5 13h5a4.5 4.5 0 0 1 4.5 4.5v4");
}
</style><g class="hntgybcog"><path class="r2z3dlekd"/><path class="jfoyb2buv"/></g>`,
		"fallback": "uix:study-participant",
	});
}

export default Component;
