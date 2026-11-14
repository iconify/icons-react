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
		"content": `<style>.llxmde4ve {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3.75h12a3.5 3.5 0 0 1 3.5 3.5v6a3.5 3.5 0 0 1-3.5 3.5H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 3.75m0 13v4m4-4v4m4-4v4m4-4v4M7.5 14v-3m4.5 3V9m4.5 5V6.5");
}
</style><path class="llxmde4ve"/>`,
		"fallback": "uix:memory-usage-chart",
	});
}

export default Component;
