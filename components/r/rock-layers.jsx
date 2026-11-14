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
		"content": `<style>.b5v327f3q {
  d: path("M3 20V7l4-2.5L11 6l4-2.5l6 3V20Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qkxt6wb5o {
  d: path("M3 11c3-1.5 6 1.5 9 0s6 1.5 9 0M3 15.5c3-1.5 6 1.5 9 0s6 1.5 9 0");
}
</style><g class="hntgybcog"><path class="b5v327f3q"/><path class="qkxt6wb5o"/></g>`,
		"fallback": "uix:rock-layers",
	});
}

export default Component;
