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
		"content": `<style>.bjiw92bmo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.5 8v6.5M6 21l2.5-6.5L11 21m-5-8.5l2.5-3l4 2.5m0 0l5.5 9");
}
</style><path class="bjiw92bmo"/>`,
		"fallback": "uix:person-white-cane",
	});
}

export default Component;
