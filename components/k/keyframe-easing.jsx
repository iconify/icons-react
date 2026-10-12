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
		"content": `<style>.qz-32ib6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.85 8.6L5.9 9.65q.35.35 0 .7L4.85 11.4q-.35.35-.7 0L3.1 10.35q-.35-.35 0-.7L4.15 8.6q.35-.35.7 0m7.86-2.14l2.83 2.83q.71.71 0 1.42l-2.83 2.83q-.71.71-1.42 0l-2.83-2.83q-.71-.71 0-1.42l2.83-2.83q.71-.71 1.42 0m7.14 2.14l1.05 1.05q.35.35 0 .7l-1.05 1.05q-.35.35-.7 0l-1.05-1.05q-.35-.35 0-.7l1.05-1.05q.35-.35.7 0M2.75 19h18.5M6 16.75V19m6-2.25V19m6-2.25V19");
}
</style><path class="qz-32ib6x"/>`,
		"fallback": "iconoven:keyframe-easing",
	});
}

export default Component;
