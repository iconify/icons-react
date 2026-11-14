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
		"content": `<style>.kr44epbra {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.5c1.5-3.75 14.5-3.75 16 0Zm8-6v-11m-2.75 11L5.5 6m9.25 8.5L18.5 6m-10-3h.01m6.99 0h.01");
}
</style><path class="kr44epbra"/>`,
		"fallback": "uix:pin-geyser",
	});
}

export default Component;
