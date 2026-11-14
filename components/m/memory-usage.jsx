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

.lffxep-zr {
  d: path("M5.125 5.5h13.75A2.625 2.625 0 0 1 21.5 8.125v4.75a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 12.875v-4.75A2.625 2.625 0 0 1 5.125 5.5");
}

.sm-qa0blx {
  d: path("M7 8.25h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H7a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 7 8.25m8.5 0H17a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5m-10 7.25v3m3.5-3v3m6-3v3m3.5-3v3");
}
</style><g class="hntgybcog"><path class="lffxep-zr"/><path class="sm-qa0blx"/></g>`,
		"fallback": "uix:memory-usage",
	});
}

export default Component;
