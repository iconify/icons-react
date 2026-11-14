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
		"content": `<style>.j9vntjbur {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 9a2.25 2.25 0 0 1 0-4.5a6 6 0 0 1 8.5 0A2.25 2.25 0 0 1 16 9ZM8 20v-5l4-3.5l4 3.5v5M3 20h18M4.75 11.5L4 15m15.5-3.5l-.75 3.5");
}
</style><path class="j9vntjbur"/>`,
		"fallback": "uix-sharp:risk-exposure",
	});
}

export default Component;
