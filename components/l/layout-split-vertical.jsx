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
		"content": `<style>.uzhw-6buf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v9A3.5 3.5 0 0 1 18 20H6a3.5 3.5 0 0 1-3.5-3.5v-9A3.5 3.5 0 0 1 6 4m6 0v16");
}
</style><path class="uzhw-6buf"/>`,
		"fallback": "uix:layout-split-vertical",
	});
}

export default Component;
