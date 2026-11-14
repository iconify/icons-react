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
		"content": `<style>.nudvk3uap {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.469 5.977l.892 1.504a2.63 2.63 0 0 0 1.682 1.222l1.706.384a1.71 1.71 0 0 1 .908 2.795l-1.154 1.313a2.63 2.63 0 0 0-.643 1.977l.163 1.741a1.71 1.71 0 0 1-2.378 1.728l-1.606-.693a2.63 2.63 0 0 0-2.078 0l-1.606.693a1.71 1.71 0 0 1-2.378-1.728l.163-1.741a2.63 2.63 0 0 0-.643-1.977l-1.154-1.313a1.71 1.71 0 0 1 .908-2.795l1.706-.384a2.63 2.63 0 0 0 1.682-1.222l.892-1.504a1.71 1.71 0 0 1 2.938 0");
}
</style><path class="nudvk3uap"/>`,
		"fallback": "uix:rating-star-empty",
	});
}

export default Component;
