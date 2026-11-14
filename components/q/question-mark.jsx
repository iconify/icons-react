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
		"content": `<style>.krabb-zvz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 8c0-2.75 2.1-4.5 4.5-4.5c2.6 0 4.5 1.75 4.5 4.25C16.5 11 12 11.5 12 15m0 4.5h.01");
}
</style><path class="krabb-zvz"/>`,
		"fallback": "uix:question-mark",
	});
}

export default Component;
