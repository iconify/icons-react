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
		"content": `<style>.bv1l9uk2m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m3.75 4.75L9.5 14L8 21.5M9.5 14l11-10M8.75 10.5L3.5 13");
}
</style><path class="bv1l9uk2m"/>`,
		"fallback": "uix:taekwondo-kick",
	});
}

export default Component;
