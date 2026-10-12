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
		"content": `<style>.cx6cowy4u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 10.75h16l.804-.002l-.054.802A8.75 8.75 0 0 1 16 18.7v2.55H8V18.7a8.75 8.75 0 0 1-4.75-7.15l-.054-.802zm4.5-2.5l-1-1l1-1l1-1l-1-1m3.5 4l-1-1l1-1l1-1l-1-1m3.5 4l-1-1l1-1l1-1l-1-1");
}
</style><path class="cx6cowy4u"/>`,
		"fallback": "iconoven:soup-sharp",
	});
}

export default Component;
