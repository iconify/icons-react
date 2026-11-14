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
		"content": `<style>.r0-mk41sr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 16.5c-2-8 3.5-14 14-14c0 9.5-6 15.5-14 14m-1.75 1.75L12.5 8.5m2.25 9.5l2 2L21 15.75");
}
</style><path class="r0-mk41sr"/>`,
		"fallback": "uix:leaf-check",
	});
}

export default Component;
