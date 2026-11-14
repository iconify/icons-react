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
		"content": `<style>.w3efvibtj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9c-4 2-5.5 5.5-5.5 8.25s3 4.25 8.5 4.25s8.5-1.5 8.5-4.25S19 11 15 9Zm0 0L7.5 4.5L10 5.75L12 3l2 2.75l2.5-1.25L15 9m-3 0l-2 4m2-4l2 4");
}
</style><path class="w3efvibtj"/>`,
		"fallback": "uix:jewellery-pouch",
	});
}

export default Component;
