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

.ocloyjbja {
  d: path("M2.5 14h19M7 21.5v-13a5 5 0 0 1 10 0v13");
}

.w3dfmdbib {
  fill: currentColor;
  d: path("M5 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="ocloyjbja"/><path class="w3dfmdbib"/></g>`,
		"fallback": "uix:line-interchange-symbol",
	});
}

export default Component;
