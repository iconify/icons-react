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

.j1bp8mw5b {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0m6.5-4.5v9m0-6l6-3.5m-6 6.5l6 3.5");
}

.qzei6tbgo {
  d: path("m14.815 16.315l.12.12a.633.633 0 0 1-.31 1.065a.733.733 0 0 1-.875-.875a.633.633 0 0 1 1.065-.31");
}
</style><g class="hntgybcog"><path class="j1bp8mw5b"/><path class="qzei6tbgo"/></g>`,
		"fallback": "uix:transistor",
	});
}

export default Component;
