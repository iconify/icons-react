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
		"content": `<style>.qbbkg0ctz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.982 9h8.036a1.75 1.75 0 0 1 1.736 1.967l-1.062 8.5A1.75 1.75 0 0 1 12.955 21h-5.91a1.75 1.75 0 0 1-1.737-1.533l-1.062-8.5A1.75 1.75 0 0 1 5.982 9M11.5 9l8-6.5M4.5 13h11M5 17.25h10");
}
</style><path class="qbbkg0ctz"/>`,
		"fallback": "uix:sauna-room",
	});
}

export default Component;
