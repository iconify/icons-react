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
		"content": `<style>.ngp5vqz2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 4H7.5a4 4 0 0 0 0 8H10m4-8h2.5a4 4 0 0 1 0 8H14M9.5 8h5m.5 9.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m4.25 1.75L21 21");
}
</style><path class="ngp5vqz2b"/>`,
		"fallback": "uix:suspicious-link",
	});
}

export default Component;
