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
		"content": `<style>.vrn7rmb9x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5h7V21l-1.75-1.25L6.5 21l-1.75-1.25L3 21Zm11 0h7V21l-1.75-1.25L17.5 21l-1.75-1.25L14 21Zm-8.5 5h2m9 0h2");
}
</style><path class="vrn7rmb9x"/>`,
		"fallback": "uix:split-bill",
	});
}

export default Component;
