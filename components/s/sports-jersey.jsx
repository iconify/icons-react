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

.nre0yfb3x {
  d: path("M8 3L3 6l1.5 4.5l2.5-1V21h10V9.5l2.5 1L21 6l-5-3c-.5 2-2.5 3-4 3S8.5 5 8 3");
}

.p15yvwq0d {
  d: path("M10 11.5h4l-2.5 6");
}
</style><g class="hntgybcog"><path class="nre0yfb3x"/><path class="p15yvwq0d"/></g>`,
		"fallback": "uix:sports-jersey",
	});
}

export default Component;
