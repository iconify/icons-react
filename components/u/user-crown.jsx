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
		"content": `<style>.wx41ybc4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.326 5.198l-.138-1.035a.584.584 0 0 1 .937-.538l.076.059a1.41 1.41 0 0 0 1.924-.184a1.163 1.163 0 0 1 1.75 0a1.41 1.41 0 0 0 1.924.184l.076-.059a.584.584 0 0 1 .937.538l-.138 1.035A1.5 1.5 0 0 1 14.187 6.5H9.813a1.5 1.5 0 0 1-1.487-1.302M9 12.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0M4.5 21.5c0-2 3.25-3.25 7.5-3.25s7.5 1.25 7.5 3.25");
}
</style><path class="wx41ybc4s"/>`,
		"fallback": "uix:user-crown",
	});
}

export default Component;
