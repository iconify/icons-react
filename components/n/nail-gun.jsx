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
		"content": `<style>.n9sdbjc_k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.75H19A2.25 2.25 0 0 1 21.25 7v.5A2.25 2.25 0 0 1 19 9.75h-.75l1.25 8.5h-4l-1.25-8.5H7.5v2.75a1 1 0 0 1-1 1H4.25a1 1 0 0 1-1-1V6A1.25 1.25 0 0 1 4.5 4.75M3.75 16.5h3m-1.5 0v4.75");
}
</style><path class="n9sdbjc_k"/>`,
		"fallback": "iconoven:nail-gun",
	});
}

export default Component;
