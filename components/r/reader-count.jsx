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
		"content": `<style>.n7-e_jbcq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.463 20.5H3.5c-.6 0-1-.4-1-1c0-3 2.9-5 6.5-5c1.076 0 2.041.185 2.863.556M5.5 8a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M16 4.5a3.5 3.5 0 0 1 .906 6.881m-.656 2.869l-.75 7m4.5-7l-.75 7m-5-4.75h7M14 19.25h7");
}
</style><path class="n7-e_jbcq"/>`,
		"fallback": "uix:reader-count",
	});
}

export default Component;
