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
		"content": `<style>.h7z6f9bnl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13V9.5a5.5 5.5 0 0 1 11 0V13Zm2 0c0 5-2.5 7-5 6m8.5-6v8.5m3.5-8.5c0 5 2.5 7 5 6");
}
</style><path class="h7z6f9bnl"/>`,
		"fallback": "uix:invertebrate",
	});
}

export default Component;
