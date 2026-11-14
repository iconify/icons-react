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
		"content": `<style>.c-t1h8fqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 9h3a3.5 3.5 0 0 1 3.5 3.5V18a3.5 3.5 0 0 1-3.5 3.5H8A3.5 3.5 0 0 1 4.5 18v-5.5A3.5 3.5 0 0 1 8 9m-.25-6.5h3.5A1.75 1.75 0 0 1 13 4.25v3A1.75 1.75 0 0 1 11.25 9h-3.5A1.75 1.75 0 0 1 6 7.25v-3A1.75 1.75 0 0 1 7.75 2.5m.5 3.25h2.5m4 12.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m1 2.25l4.5-4.5");
}
</style><path class="c-t1h8fqz"/>`,
		"fallback": "uix:usb-blocked",
	});
}

export default Component;
