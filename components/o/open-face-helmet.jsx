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
		"content": `<style>.w-0nhib4o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 17.5C3 10 7 3 13.5 3c5 0 8 3.5 8 7.5H15v7Zm10.5 0c0 2.5 2 4 4.5 3");
}
</style><path class="w-0nhib4o"/>`,
		"fallback": "uix:open-face-helmet",
	});
}

export default Component;
