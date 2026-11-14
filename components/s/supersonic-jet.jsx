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
		"content": `<style>.g_n5tbbsu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 15h10.5l6-1.25l-6-1.25H9l-3.5-5H3.75L3.5 13c0 1.25.5 2 1.5 2m3.625 0h5.25A1.125 1.125 0 0 1 15 16.125a1.125 1.125 0 0 1-1.125 1.125h-5.25A1.125 1.125 0 0 1 7.5 16.125A1.125 1.125 0 0 1 8.625 15");
}
</style><path class="g_n5tbbsu"/>`,
		"fallback": "uix:supersonic-jet",
	});
}

export default Component;
