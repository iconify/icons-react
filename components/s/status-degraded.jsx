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
		"content": `<style>.fx2sk6bva {
  d: path("M14.75 7.5za1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V9a1.5 1.5 0 0 1 1.5-1.5m5.25-4zA1.5 1.5 0 0 1 21.5 5v14a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5V5A1.5 1.5 0 0 1 20 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2_9habkm {
  fill: currentColor;
  d: path("M4.25 15za1.5 1.5 0 0 1 1.5 1.5V19a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-2.5a1.5 1.5 0 0 1 1.5-1.5m5.25-3.5zA1.5 1.5 0 0 1 11 13v6a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 8 19v-6a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="o2_9habkm"/><path class="fx2sk6bva"/></g>`,
		"fallback": "uix:status-degraded",
	});
}

export default Component;
