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
		"content": `<style>.qhq61gbek {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 8.5h7v7h-7ZM10 5l2-2l2 2m-4 14l2 2l2-2m-9-9l-2 2l2 2m14-4l2 2l-2 2");
}
</style><path class="qhq61gbek"/>`,
		"fallback": "uix-sharp:nudge-object",
	});
}

export default Component;
