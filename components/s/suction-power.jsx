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
		"content": `<style>.fv4alcz5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20.5h16V18a2 2 0 0 0-2-2h-4v-3.5h-4V16H6a2 2 0 0 0-2 2Zm8-18V8m-1.75-1.75L12 8l1.75-1.75M3.5 4.5l4 4m-3 0h3v-3m13-1l-4 4m3 0h-3v-3");
}
</style><path class="fv4alcz5s"/>`,
		"fallback": "uix:suction-power",
	});
}

export default Component;
