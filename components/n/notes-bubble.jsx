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
		"content": `<style>.hl_oygboe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3h-8l-4 4v-4a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3m1 5h10M7 13h10");
}
</style><path class="hl_oygboe"/>`,
		"fallback": "iconoven:notes-bubble",
	});
}

export default Component;
