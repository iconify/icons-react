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
		"content": `<style>.fw7iobtun {
  d: path("M4 10h9a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 13 13H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zhpokxblc {
  d: path("m15.289 9.575l3.5-1.884A1.5 1.5 0 0 1 21 9.011v4.978a1.5 1.5 0 0 1-2.211 1.32l-3.5-1.884a1.5 1.5 0 0 1-.789-1.321v-1.208a1.5 1.5 0 0 1 .789-1.321M6 10V6.5M9 10V6.5m3 3.5V6.5M6 13v4h6v-4");
}
</style><g class="hntgybcog"><path class="fw7iobtun"/><path class="zhpokxblc"/></g>`,
		"fallback": "uix:school-band",
	});
}

export default Component;
