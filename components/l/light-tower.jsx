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
		"content": `<style>.yr33dvbbd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 3h6.5A1.75 1.75 0 0 1 15 4.75v1.5A1.75 1.75 0 0 1 13.25 8h-6.5A1.75 1.75 0 0 1 5 6.25v-1.5A1.75 1.75 0 0 1 6.75 3M10 8v9m-4.5 4.5L10 17l4.5 4.5M18 3.75l3-1m-3 4.5l3 1");
}
</style><path class="yr33dvbbd"/>`,
		"fallback": "uix:light-tower",
	});
}

export default Component;
