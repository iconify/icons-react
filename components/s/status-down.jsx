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
		"content": `<style>.h253fdcho {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 16v-6M8 16V5m4.5 11v-3m5.5 1.5V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="h253fdcho"/>`,
		"fallback": "uix-sharp:status-down",
	});
}

export default Component;
