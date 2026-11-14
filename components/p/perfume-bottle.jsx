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

.mk9h9s_9c {
  d: path("M9.75 5.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.vu3t-zbqq {
  d: path("M10.5 10h3a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5h-3A5.5 5.5 0 0 1 5 15.5a5.5 5.5 0 0 1 5.5-5.5m1.25-2.5h.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 12.25 10h-.5a1.25 1.25 0 0 1-1.25-1.25a1.25 1.25 0 0 1 1.25-1.25");
}
</style><g class="hntgybcog"><path class="vu3t-zbqq"/><path class="mk9h9s_9c"/></g>`,
		"fallback": "uix:perfume-bottle",
	});
}

export default Component;
