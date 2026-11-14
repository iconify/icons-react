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
		"content": `<style>.pw0bd3hht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 20v-9a8 8 0 0 1 16 0v9h-5v-9a3 3 0 0 0-6 0v9Zm0-3.5h5m6 0h5");
}
</style><path class="pw0bd3hht"/>`,
		"fallback": "uix:magnet-ring",
	});
}

export default Component;
