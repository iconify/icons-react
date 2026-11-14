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

.v-kpp0bng {
  d: path("M5.25 13.5zA1.75 1.75 0 0 1 7 15.25v4A1.75 1.75 0 0 1 5.25 21a1.75 1.75 0 0 1-1.75-1.75v-4a1.75 1.75 0 0 1 1.75-1.75m13.5 0za1.75 1.75 0 0 1 1.75 1.75v4A1.75 1.75 0 0 1 18.75 21A1.75 1.75 0 0 1 17 19.25v-4a1.75 1.75 0 0 1 1.75-1.75m-8.75 5l4-7");
}

.vvgcjrlwh {
  d: path("M3.5 16v-4a8.5 8.5 0 0 1 17 0v4");
}
</style><g class="hntgybcog"><path class="vvgcjrlwh"/><path class="v-kpp0bng"/></g>`,
		"fallback": "uix:noise-cancelling",
	});
}

export default Component;
