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
		"content": `<style>.l2730abkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 5.5c0-1.1.9-2 2-2s2 .9 2 2V15c0 3 2.25 5.25 5 5.25s5-2.25 5-5c0-1.75-1-3-2.5-3.5M5 9.5h9.5");
}
</style><path class="l2730abkr"/>`,
		"fallback": "uix:taka-sign",
	});
}

export default Component;
