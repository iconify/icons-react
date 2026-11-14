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
		"content": `<style>.ok3-rjb0n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15h19v3h-19ZM5 18h4l-4 3.5Zm14 0h-4l4 3.5ZM6.5 11h11v4h-11ZM7 7h10v4H7Zm.5-4h9v4h-9ZM12 3v1.5");
}
</style><path class="ok3-rjb0n"/>`,
		"fallback": "uix-sharp:overstock",
	});
}

export default Component;
