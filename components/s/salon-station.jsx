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

.ilk7xub_b {
  d: path("M8.5 8.5A4 4 0 0 1 11 5.25m-5 12h7m-5.5 0V21m3-3.75V21");
}

.n0ev4mbcj {
  d: path("M5.5 8.25a6.5 6.25 0 1 0 13 0a6.5 6.25 0 1 0-13 0M3.5 21h17");
}
</style><g class="hntgybcog"><path class="n0ev4mbcj"/><path class="ilk7xub_b"/></g>`,
		"fallback": "uix:salon-station",
	});
}

export default Component;
