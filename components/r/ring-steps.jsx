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
		"content": `<style>.wudh84byu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 2.5zA1.75 1.75 0 0 1 8 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 6.25 2.5M8 6q6.5 1.75 13 0M8 10.5q6.5 1.75 13 0M8 15q6.5 1.75 13 0M3 21.5h18");
}
</style><path class="wudh84byu"/>`,
		"fallback": "uix:ring-steps",
	});
}

export default Component;
