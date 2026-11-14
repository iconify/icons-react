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
		"content": `<style>.itrkc9w1q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM3 14c1.5-1.5 2.5-1.5 4 0l4.5-5l5.5 2M2.5 18q3-2.25 6 0t6 0t6 0");
}
</style><path class="itrkc9w1q"/>`,
		"fallback": "uix-sharp:swimming-lesson",
	});
}

export default Component;
