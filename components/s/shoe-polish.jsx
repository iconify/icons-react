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

.r3wzw5b1b {
  d: path("M4 14a8 2.25 0 1 0 16 0a8 2.25 0 1 0-16 0");
}

.vcnqpdg7c {
  d: path("M4 14v4a8 2.25 0 0 0 16 0v-4M3.833 8.46l9.959-5.75a1.25 1.25 0 0 1 1.707.457a1.25 1.25 0 0 1-.457 1.708l-9.959 5.75a1.25 1.25 0 0 1-1.708-.458a1.25 1.25 0 0 1 .458-1.707");
}
</style><g class="hntgybcog"><path class="r3wzw5b1b"/><path class="vcnqpdg7c"/></g>`,
		"fallback": "uix:shoe-polish",
	});
}

export default Component;
