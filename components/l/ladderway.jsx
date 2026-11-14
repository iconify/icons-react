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
		"content": `<style>.jchfxmx1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5V19m7-16.5V19m-7-16.5h7m-7 2.75h7M8.5 8h7m-7 2.75h7m-7 2.75h7M2.5 19a9.5 2.75 0 1 0 19 0a9.5 2.75 0 1 0-19 0");
}
</style><path class="jchfxmx1n"/>`,
		"fallback": "uix:ladderway",
	});
}

export default Component;
