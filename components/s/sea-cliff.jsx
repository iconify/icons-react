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
		"content": `<style>.i-4miob0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h6l2 5l-1 4l2 5.5h-9Zm12 14.5q1.75-1.5 3.5 0t3.5 0M15 14.5q1.75-1.5 3.5 0t3 .25");
}
</style><path class="i-4miob0m"/>`,
		"fallback": "uix-sharp:sea-cliff",
	});
}

export default Component;
