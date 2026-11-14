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
		"content": `<style>.h4v07h3jr {
  d: path("M7.75 10h5.5A1.75 1.75 0 0 1 15 11.75v2a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 6 13.75v-2A1.75 1.75 0 0 1 7.75 10m.75 0V7.75h4V10M18 5a2 2 0 1 0 3.5 0m-1.75 3l-.5 7.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r06vt4cok {
  d: path("M3 8.5v7h18");
}

.vi63wdboe {
  d: path("M5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m8.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="r06vt4cok"/><path class="vi63wdboe"/><path class="h4v07h3jr"/></g>`,
		"fallback": "uix:maintenance-cart",
	});
}

export default Component;
