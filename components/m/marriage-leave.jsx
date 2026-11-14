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

.m59wu8bxs {
  d: path("M10.5 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0m2.125-9.375l.165.296a1.5 1.5 0 0 1-.091 1.601l-.074.103a.768.768 0 0 1-1.25 0l-.074-.103a1.5 1.5 0 0 1-.091-1.601l.165-.296a.715.715 0 0 1 1.25 0");
}

.vwjnnjbwp {
  d: path("M3.5 13a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="vwjnnjbwp"/><path class="m59wu8bxs"/></g>`,
		"fallback": "uix:marriage-leave",
	});
}

export default Component;
