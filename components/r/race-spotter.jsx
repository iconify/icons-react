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
		"content": `<style>.l539_ragy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.125 8.5h.75a2.625 2.625 0 0 1 2.625 2.625v1.75A2.625 2.625 0 0 1 7.875 15.5h-.75A2.625 2.625 0 0 1 4.5 12.875v-1.75A2.625 2.625 0 0 1 7.125 8.5m9 0h.75a2.625 2.625 0 0 1 2.625 2.625v1.75a2.625 2.625 0 0 1-2.625 2.625h-.75a2.625 2.625 0 0 1-2.625-2.625v-1.75A2.625 2.625 0 0 1 16.125 8.5M10.5 12h3M8 8.5a4.25 4.25 0 1 1 8 0m-12 13c0-2 3.5-3.25 8-3.25s8 1.25 8 3.25");
}
</style><path class="l539_ragy"/>`,
		"fallback": "uix:race-spotter",
	});
}

export default Component;
