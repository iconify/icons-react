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
		"content": `<style>.lrevsdbxz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 5.5zA1.5 1.5 0 0 1 7.5 7v1A1.5 1.5 0 0 1 6 9.5A1.5 1.5 0 0 1 4.5 8V7A1.5 1.5 0 0 1 6 5.5m12 0zA1.5 1.5 0 0 1 19.5 7v1A1.5 1.5 0 0 1 18 9.5A1.5 1.5 0 0 1 16.5 8V7A1.5 1.5 0 0 1 18 5.5m-12 4V14a6 6 0 0 0 12 0V9.5m-12-7v3m12-3v3");
}
</style><path class="lrevsdbxz"/>`,
		"fallback": "uix:patch-cable",
	});
}

export default Component;
