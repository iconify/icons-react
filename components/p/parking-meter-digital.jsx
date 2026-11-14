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
		"content": `<style>.c9u1-in3g {
  d: path("M10.875 2.5h2.25A4.375 4.375 0 0 1 17.5 6.875v2.25a4.375 4.375 0 0 1-4.375 4.375h-2.25A4.375 4.375 0 0 1 6.5 9.125v-2.25A4.375 4.375 0 0 1 10.875 2.5M12 13.5v8m-3.5 0h7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v-riqpbws {
  d: path("M10.75 5.5h2.5A1.75 1.75 0 0 1 15 7.25A1.75 1.75 0 0 1 13.25 9h-2.5A1.75 1.75 0 0 1 9 7.25a1.75 1.75 0 0 1 1.75-1.75");
}
</style><g class="hntgybcog"><path class="c9u1-in3g"/><path class="v-riqpbws"/></g>`,
		"fallback": "uix:parking-meter-digital",
	});
}

export default Component;
