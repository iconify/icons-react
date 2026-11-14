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

.or01yf-ai {
  d: path("M19 11.986V19.5c-2.5-1-5.75-.75-8.5 1c-2.5-1.75-5.5-2-8-1V8c2.5-1 5.5-.75 8 1q.35-.223.71-.413M10.5 9v1.8m0 2.4v7.3");
}

.tzg0l8scx {
  d: path("m13 12l1.25-3.75L19 3.5a1.6 1.6 0 0 1 2.25 2.25L16.5 10.5Z");
}
</style><g class="hntgybcog"><path class="or01yf-ai"/><path class="tzg0l8scx"/></g>`,
		"fallback": "uix:journal-pen",
	});
}

export default Component;
