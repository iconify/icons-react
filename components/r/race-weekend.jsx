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

.ltadzzb7p {
  d: path("M7 18V8.5h10V14H7m5-5.5V14m-5-2.75h10");
}

.p40o4cxva {
  d: path("M7.375 3.5h9.25A4.375 4.375 0 0 1 21 7.875v9.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 17.125v-9.25A4.375 4.375 0 0 1 7.375 3.5M8 2.5v3m8-3v3");
}
</style><g class="hntgybcog"><path class="p40o4cxva"/><path class="ltadzzb7p"/></g>`,
		"fallback": "uix:race-weekend",
	});
}

export default Component;
