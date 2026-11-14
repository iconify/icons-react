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
		"content": `<style>.dw8a45bhd {
  d: path("M10 13.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8 0c1.5 0 3 1 3.5 2.5M6 13.5c-1.5 0-3-1-3.5-2.5");
}

.eo3qh4btq {
  d: path("M6 13.5a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6-6V3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eo3qh4btq"/><path class="dw8a45bhd"/></g>`,
		"fallback": "uix:string-trimmer-head",
	});
}

export default Component;
