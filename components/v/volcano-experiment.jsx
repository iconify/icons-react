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
		"content": `<style>.vqzx8c6xw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 21l6-10h6l6 10Zm7.5-10c0-3 1.5-3 1.5-5.5C12 8 13.5 8 13.5 11M5 3.5l1.5 2m12.5-2l-1.5 2");
}
</style><path class="vqzx8c6xw"/>`,
		"fallback": "uix:volcano-experiment",
	});
}

export default Component;
