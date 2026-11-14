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
		"content": `<style>.r2q5ow8tm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 7H13a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 13 10.5H4.25A1.75 1.75 0 0 1 2.5 8.75A1.75 1.75 0 0 1 4.25 7m-.75 3.5V20A1.5 1.5 0 0 0 5 21.5h7.25a1.5 1.5 0 0 0 1.5-1.5v-9.5m-5-3.5v14.5m11-15.5l2 2.25v6.25h-4V8.25Zm0 0c0-2.5-2.25-3.5-4.75-3.5c-3 0-6.25 1-6.25 4.5");
}
</style><path class="r2q5ow8tm"/>`,
		"fallback": "uix:status-awaiting-pickup",
	});
}

export default Component;
