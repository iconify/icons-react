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
		"content": `<style>.b31ezcbgf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 2.5h4.25A4.375 4.375 0 0 1 15.5 6.875v4.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 2.5 11.125v-4.25A4.375 4.375 0 0 1 6.875 2.5M16 21.5V19m2.75 2.5v-5m2.75 5v-8");
}
</style><path class="b31ezcbgf"/>`,
		"fallback": "uix:signal-strength-device",
	});
}

export default Component;
