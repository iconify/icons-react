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
		"content": `<style>.q650gfmwq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 7h13a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3h-3L14 15.5c-.6-.9-3.4-.9-4 0L8.5 18h-3a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3");
}
</style><path class="q650gfmwq"/>`,
		"fallback": "uix:vr-headset",
	});
}

export default Component;
