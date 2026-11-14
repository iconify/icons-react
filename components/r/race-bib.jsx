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
		"content": `<style>.ftg7h3bav {
  d: path("M6.5 4.5h11A3.5 3.5 0 0 1 21 8v8a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 16V8a3.5 3.5 0 0 1 3.5-3.5m-.5 3h.01M18 7.5h.01M6 16.5h.01m11.99 0h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tmxz9fb7t {
  d: path("M9.5 9H13l-2.5 6M15 9v6");
}
</style><g class="hntgybcog"><path class="ftg7h3bav"/><path class="tmxz9fb7t"/></g>`,
		"fallback": "uix:race-bib",
	});
}

export default Component;
