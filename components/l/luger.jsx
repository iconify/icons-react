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
		"content": `<style>.jc4ezkb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6.5 9.75l13 2.25l1.25-1.75M4.5 15h13m-14 4h14c2 0 3.5-1.5 3.5-3.5M7.5 15v4m7.5-4v4");
}
</style><path class="jc4ezkb4b"/>`,
		"fallback": "uix:luger",
	});
}

export default Component;
