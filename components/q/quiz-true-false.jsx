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
		"content": `<style>.g_8mvfbrg {
  d: path("m4.75 12l1.5 1.75L9 10m6.5-2l3.5 3.5M19 8l-3.5 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pzd_g9b6h {
  d: path("M5.125 3.5h3.25A2.625 2.625 0 0 1 11 6.125v11.75A2.625 2.625 0 0 1 8.375 20.5h-3.25A2.625 2.625 0 0 1 2.5 17.875V6.125A2.625 2.625 0 0 1 5.125 3.5m10.5 0h3.25A2.625 2.625 0 0 1 21.5 6.125v11.75a2.625 2.625 0 0 1-2.625 2.625h-3.25A2.625 2.625 0 0 1 13 17.875V6.125A2.625 2.625 0 0 1 15.625 3.5");
}
</style><g class="hntgybcog"><path class="pzd_g9b6h"/><path class="g_8mvfbrg"/></g>`,
		"fallback": "uix:quiz-true-false",
	});
}

export default Component;
