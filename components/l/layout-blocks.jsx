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
		"content": `<style>.hqgtg5e5v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h1.5A1.5 1.5 0 0 1 7 4v1.5A1.5 1.5 0 0 1 5.5 7H4a1.5 1.5 0 0 1-1.5-1.5V4A1.5 1.5 0 0 1 4 2.5m7.25 0h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5V4a1.5 1.5 0 0 1 1.5-1.5m7.25 0H20A1.5 1.5 0 0 1 21.5 4v1.5A1.5 1.5 0 0 1 20 7h-1.5A1.5 1.5 0 0 1 17 5.5V4a1.5 1.5 0 0 1 1.5-1.5M4 9.75h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5v-1.5A1.5 1.5 0 0 1 4 9.75m7.25 0h1.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5m7.25 0H20a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5M4 17h1.5A1.5 1.5 0 0 1 7 18.5V20a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20v-1.5A1.5 1.5 0 0 1 4 17m7.25 0h1.5a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5h-1.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5m7.25 0H20a1.5 1.5 0 0 1 1.5 1.5V20a1.5 1.5 0 0 1-1.5 1.5h-1.5A1.5 1.5 0 0 1 17 20v-1.5a1.5 1.5 0 0 1 1.5-1.5");
}
</style><path class="hqgtg5e5v"/>`,
		"fallback": "uix:layout-blocks",
	});
}

export default Component;
