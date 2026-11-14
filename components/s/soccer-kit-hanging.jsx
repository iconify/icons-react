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
		"content": `<style>.nmc31wbow {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8L3 11l1.75 4L7 14v7.5h10V14l2.25 1L21 11l-5.5-3a3.5 3.5 0 0 1-7 0M10 4.75a2 2 0 1 1 2 2V8");
}
</style><path class="nmc31wbow"/>`,
		"fallback": "uix:soccer-kit-hanging",
	});
}

export default Component;
