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
		"content": `<style>.tjahizb3i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 6c-4.25 0-7 2.5-7 6s2.75 6 7 6Zm3 2h7m-7 4h7m-7 4h7M17 5.5c-1.25 2 1.25 4 0 6.5s1.25 4.5 0 6.5");
}
</style><path class="tjahizb3i"/>`,
		"fallback": "uix:rear-fog-light",
	});
}

export default Component;
