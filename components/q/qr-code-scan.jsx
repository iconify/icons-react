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
		"content": `<style>.bzu5_sbov {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 8V6A2.5 2.5 0 0 1 6 3.5h2m8 0h2A2.5 2.5 0 0 1 20.5 6v2m0 8v2a2.5 2.5 0 0 1-2.5 2.5h-2m-8 0H6A2.5 2.5 0 0 1 3.5 18v-2M9 7.5zA1.5 1.5 0 0 1 10.5 9A1.5 1.5 0 0 1 9 10.5A1.5 1.5 0 0 1 7.5 9A1.5 1.5 0 0 1 9 7.5m6 0zA1.5 1.5 0 0 1 16.5 9a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 13.5 9A1.5 1.5 0 0 1 15 7.5m-6 6za1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 9 16.5A1.5 1.5 0 0 1 7.5 15A1.5 1.5 0 0 1 9 13.5m6 1.5h.01");
}
</style><path class="bzu5_sbov"/>`,
		"fallback": "uix:qr-code-scan",
	});
}

export default Component;
