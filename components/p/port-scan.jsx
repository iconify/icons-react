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
		"content": `<style>.nrcgq8b8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 3.5h13A1.5 1.5 0 0 1 20 5v5.5a1.5 1.5 0 0 1-1.5 1.5H16v2.5H8V12H5.5A1.5 1.5 0 0 1 4 10.5V5a1.5 1.5 0 0 1 1.5-1.5m2.5 2V8m3-2.5V8m3-2.5V8m1.25 9.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m4 1.75L21 21");
}
</style><path class="nrcgq8b8p"/>`,
		"fallback": "uix:port-scan",
	});
}

export default Component;
