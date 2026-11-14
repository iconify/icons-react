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
		"content": `<style>.d444kvbiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.5v16M11.5 5v15.5m6-17.5v8.5M6 7za1.5 1.5 0 0 1 1.5 1.5v5A1.5 1.5 0 0 1 6 15a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 6 7m5.5 1.5zA1.5 1.5 0 0 1 13 10v4a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 10 14v-4a1.5 1.5 0 0 1 1.5-1.5m6-3.75za1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5M15 18h6");
}
</style><path class="d444kvbiv"/>`,
		"fallback": "uix:stock-sell",
	});
}

export default Component;
