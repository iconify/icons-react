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
		"content": `<style>.anzexhb4y {
  d: path("M15.5 16.5L18 19l2.5-2.5");
}

.b1iz5acmw {
  d: path("M2.5 5h19m-19 14H13M2.5 12h13a2.5 2.5 0 0 1 2.5 2.5V19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1iz5acmw"/><path class="anzexhb4y"/></g>`,
		"fallback": "uix:move-line-down",
	});
}

export default Component;
