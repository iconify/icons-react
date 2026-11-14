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

.neh6wwbra {
  d: path("m10.5 10l-1.75 2.5L10.5 15m3-5l1.75 2.5L13.5 15");
}

.zkjgglboj {
  d: path("M10.375 2h3.25A4.375 4.375 0 0 1 18 6.375v11.25A4.375 4.375 0 0 1 13.625 22h-3.25A4.375 4.375 0 0 1 6 17.625V6.375A4.375 4.375 0 0 1 10.375 2m.375 3h2.5");
}
</style><g class="hntgybcog"><path class="zkjgglboj"/><path class="neh6wwbra"/></g>`,
		"fallback": "uix:mobile-dev",
	});
}

export default Component;
