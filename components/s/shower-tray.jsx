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

.ipyya2i8f {
  d: path("M5.5 5h13l3 11v3h-19v-3Zm-3 11h19");
}

.m8c6ijb9s {
  d: path("M9 10.5a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0");
}
</style><g class="hntgybcog"><path class="ipyya2i8f"/><path class="m8c6ijb9s"/></g>`,
		"fallback": "uix:shower-tray",
	});
}

export default Component;
