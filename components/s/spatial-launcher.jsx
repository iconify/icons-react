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
		"content": `<style>.w9eyi9a0x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.702 6.5h.548a1.66 1.66 0 0 1 1.631 1.966l-.113.607a1.75 1.75 0 0 1-1.72 1.427H5.5a1.66 1.66 0 0 1-1.631-1.966l.113-.607A1.75 1.75 0 0 1 5.702 6.5m6.75 0H13a1.66 1.66 0 0 1 1.631 1.966l-.113.607a1.75 1.75 0 0 1-1.72 1.427h-.548a1.66 1.66 0 0 1-1.631-1.966l.113-.607a1.75 1.75 0 0 1 1.72-1.427m6.75 0h.548a1.66 1.66 0 0 1 1.631 1.966l-.113.607a1.75 1.75 0 0 1-1.72 1.427H19a1.66 1.66 0 0 1-1.631-1.966l.113-.607a1.75 1.75 0 0 1 1.72-1.427m-14.75 7H5a1.66 1.66 0 0 1 1.631 1.966l-.113.607a1.75 1.75 0 0 1-1.72 1.427H4.25a1.66 1.66 0 0 1-1.631-1.966l.113-.607a1.75 1.75 0 0 1 1.72-1.427m6.75 0h.548a1.66 1.66 0 0 1 1.631 1.966l-.113.607a1.75 1.75 0 0 1-1.72 1.427H11a1.66 1.66 0 0 1-1.631-1.966l.113-.607a1.75 1.75 0 0 1 1.72-1.427m6.75 0h.548a1.66 1.66 0 0 1 1.631 1.966l-.113.607a1.75 1.75 0 0 1-1.72 1.427h-.548a1.66 1.66 0 0 1-1.631-1.966l.113-.607a1.75 1.75 0 0 1 1.72-1.427");
}
</style><path class="w9eyi9a0x"/>`,
		"fallback": "uix:spatial-launcher",
	});
}

export default Component;
