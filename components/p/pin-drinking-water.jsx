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
		"content": `<style>.b8vaglbhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h11.5a5 5 0 0 1 5 5V14h-4v-1.5a1 1 0 0 0-1-1H3M3 5v9m7-6.5v-3m-2.5 0h5m5 12.5l1.5 2.25a1.75 1.75 0 1 1-3 0Z");
}
</style><path class="b8vaglbhj"/>`,
		"fallback": "uix:pin-drinking-water",
	});
}

export default Component;
