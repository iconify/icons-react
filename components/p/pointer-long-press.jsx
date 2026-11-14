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

.n81-vgbfx {
  d: path("M8.5 14.5v-6a1.5 1.5 0 0 1 3 0V13a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0a1.25 1.25 0 0 1 2.5 0v3.5c0 2.9-1.75 5-4.5 5H13c-1.6 0-2.75-.6-3.5-1.75l-4-5a1.5 1.5 0 0 1 2-2Zm6-9a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.ukiyt6bgj {
  d: path("M17.5 4.5v1.25l.75.75");
}
</style><g class="hntgybcog"><path class="n81-vgbfx"/><path class="ukiyt6bgj"/></g>`,
		"fallback": "uix:pointer-long-press",
	});
}

export default Component;
