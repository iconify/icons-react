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

.mw24mpbeq {
  fill: currentColor;
  d: path("M4.5 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.o25klbbjj {
  d: path("M15.949 4.218a9.5 9.5 0 0 1 0 15.564");
}
</style><g class="hntgybcog"><path class="mw24mpbeq"/><path class="o25klbbjj"/></g>`,
		"fallback": "uix:low-key",
	});
}

export default Component;
