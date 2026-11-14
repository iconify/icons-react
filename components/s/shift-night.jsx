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
		"content": `<style>.huvz_0a8p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M20 14.5A8.5 8.5 0 1 1 9.5 4A6.75 6.75 0 0 0 20 14.5m-2-9h.01M21 9h.01");
}
</style><path class="huvz_0a8p"/>`,
		"fallback": "uix:shift-night",
	});
}

export default Component;
