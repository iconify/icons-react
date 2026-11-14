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

.msdn4-b4k {
  d: path("M5.25 2.25v3h3M8 9.5A1.5 1.5 0 0 1 9.5 8h5A1.5 1.5 0 0 1 16 9.5V13a1.5 1.5 0 0 1-1.5 1.5H11l-2.5 2v-2A1.5 1.5 0 0 1 8 13Z");
}

.t6giiwb8s {
  d: path("M2.5 12a9.5 9.5 0 1 0 2.75-6.75");
}
</style><g class="hntgybcog"><path class="t6giiwb8s"/><path class="msdn4-b4k"/></g>`,
		"fallback": "uix:retro",
	});
}

export default Component;
