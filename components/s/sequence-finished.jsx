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

.nwh4f-2xw {
  d: path("M2.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M14 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0m-8.25 0h2.5m3.5 0H14");
}

.qt0o27b5o {
  d: path("m16.25 12.25l1 1l1.75-2");
}
</style><g class="hntgybcog"><path class="nwh4f-2xw"/><path class="qt0o27b5o"/></g>`,
		"fallback": "uix:sequence-finished",
	});
}

export default Component;
