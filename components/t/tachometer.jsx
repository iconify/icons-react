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
		"content": `<style>.c-8pm1brl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.636 19.614a9 9 0 1 1 12.728 0M3 13.25h2.5m6.5-9v2.5m9 6.5h-2.5m-6.5 0L16.5 10");
}
</style><path class="c-8pm1brl"/>`,
		"fallback": "uix:tachometer",
	});
}

export default Component;
