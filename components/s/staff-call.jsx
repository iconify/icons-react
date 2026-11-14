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
		"content": `<style>.pt-vyac_y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17a7.5 7.5 0 0 1 15 0ZM4 17h16a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 20 20H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 17m8-9.75V9.5m-1.5-2.25h3M4.5 6L6 7.5M19.5 6L18 7.5");
}
</style><path class="pt-vyac_y"/>`,
		"fallback": "uix:staff-call",
	});
}

export default Component;
