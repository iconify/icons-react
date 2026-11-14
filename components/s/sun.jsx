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
		"content": `<style>.mam4tsbod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 12a4 4 0 1 0 8 0a4 4 0 1 0-8 0m4-9.5v2m0 15v2M2.5 12h2m15 0h2M5.25 5.25l1.5 1.5m10.5 10.5l1.5 1.5m0-13.5l-1.5 1.5m-12 12l1.5-1.5");
}
</style><path class="mam4tsbod"/>`,
		"fallback": "uix:sun",
	});
}

export default Component;
