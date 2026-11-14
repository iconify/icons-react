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

.polw-1gzh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m12 5l5 5");
}

.q7b34bb4i {
  d: path("M8 11.5v-2a2.5 2.5 0 0 1 5 0v2l.75 1h-6.5Zm2.5 3.25h.01");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="q7b34bb4i"/></g>`,
		"fallback": "uix:job-search-alert",
	});
}

export default Component;
