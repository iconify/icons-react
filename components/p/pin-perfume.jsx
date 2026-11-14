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
		"content": `<style>.a566j6b7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 2.5h3.5A1.75 1.75 0 0 1 14 4.25v.5a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 7 4.75v-.5A1.75 1.75 0 0 1 8.75 2.5m1.25 4h1A1.5 1.5 0 0 1 12.5 8v.5A1.5 1.5 0 0 1 11 10h-1a1.5 1.5 0 0 1-1.5-1.5V8A1.5 1.5 0 0 1 10 6.5M8.25 10h4.5A5.25 5.25 0 0 1 18 15.25v1a5.25 5.25 0 0 1-5.25 5.25h-4.5A5.25 5.25 0 0 1 3 16.25v-1A5.25 5.25 0 0 1 8.25 10m9.25-7h.01m2.99 2h.01M17.5 7h.01");
}
</style><path class="a566j6b7z"/>`,
		"fallback": "uix:pin-perfume",
	});
}

export default Component;
