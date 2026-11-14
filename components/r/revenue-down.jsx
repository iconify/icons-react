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
		"content": `<style>.j_jgtuboh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V4M7 20.5V9m4.5 11.5v-7m6.5 1V21m-2.75-2.75L18 21l2.75-2.75");
}
</style><path class="j_jgtuboh"/>`,
		"fallback": "uix:revenue-down",
	});
}

export default Component;
