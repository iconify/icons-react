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
		"content": `<style>.isxxwtbor {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 8.5h1A1.75 1.75 0 0 1 7 10.25v9.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-9.5A1.75 1.75 0 0 1 4.25 8.5m7.25 4h1a1.75 1.75 0 0 1 1.75 1.75v5.5a1.75 1.75 0 0 1-1.75 1.75h-1a1.75 1.75 0 0 1-1.75-1.75v-5.5a1.75 1.75 0 0 1 1.75-1.75m7.25 4h1a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75h-1A1.75 1.75 0 0 1 17 19.75v-1.5a1.75 1.75 0 0 1 1.75-1.75m-16.25-5H7m-4.5 3.25H7M2.5 18H7m2.75-2.5h4.5m-4.5 3h4.5M17 19h4.5M10 3l10.5 9.5m0-3.5v3.5H17");
}
</style><path class="isxxwtbor"/>`,
		"fallback": "uix:pay-cut",
	});
}

export default Component;
