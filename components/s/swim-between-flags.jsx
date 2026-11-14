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
		"content": `<style>.spdp0bc6m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 16.25V3h4v4.5H6m12 8.75V3h-4v4.5h4M3 20q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="spdp0bc6m"/>`,
		"fallback": "uix:swim-between-flags",
	});
}

export default Component;
