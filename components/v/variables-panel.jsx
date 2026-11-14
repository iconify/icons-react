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
		"content": `<style>.tbwyrac7n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5M5.5 7.5L8 10m0-2.5L5.5 10m5-2.5h2m-2 2.75h2m2.5-1.5h3.5M5.5 14L8 16.5M8 14l-2.5 2.5m5-2.5h2m-2 2.75h2m2.5-1.5h3.5");
}
</style><path class="tbwyrac7n"/>`,
		"fallback": "uix:variables-panel",
	});
}

export default Component;
