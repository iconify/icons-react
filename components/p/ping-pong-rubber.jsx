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
		"content": `<style>.e08wjzbnm {
  d: path("M10.5 17.5zA1.5 1.5 0 0 1 12 19v1a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 9 20v-1a1.5 1.5 0 0 1 1.5-1.5m5.25-12.75q4.75-2.25 5.75.75L18 10M7.5 9h.01M11 7h.01m-.51 5.5h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8wnyjbaw {
  d: path("M3 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="w8wnyjbaw"/><path class="e08wjzbnm"/></g>`,
		"fallback": "uix:ping-pong-rubber",
	});
}

export default Component;
