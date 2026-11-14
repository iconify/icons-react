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
		"content": `<style>.h981w4ppl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 4h13.75A2.625 2.625 0 0 1 21.5 6.625v3.75A2.625 2.625 0 0 1 18.875 13H5.125A2.625 2.625 0 0 1 2.5 10.375v-3.75A2.625 2.625 0 0 1 5.125 4M6 13v7.5M18 13v7.5M6.5 4v5m3-5v5m5-5v5m3-5v5");
}
</style><path class="h981w4ppl"/>`,
		"fallback": "uix:keyboard-instrument",
	});
}

export default Component;
