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
		"content": `<style>.xj20zfk9u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.5V7a4 4 0 0 1 4-4h2m1.904 0h4.192a1.255 1.255 0 0 1 1.154 1.75l-.36.841a1.5 1.5 0 0 1-1.379.909h-3.022a1.5 1.5 0 0 1-1.379-.909l-.36-.841A1.255 1.255 0 0 1 14.404 3M4 21.5h5m7.5-12V12m-3.75-2.75l-1.25 2m8.75-2l1.25 2");
}
</style><path class="xj20zfk9u"/>`,
		"fallback": "uix:street-light-on",
	});
}

export default Component;
