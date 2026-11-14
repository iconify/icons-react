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
		"content": `<style>.ctims06ca {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 21.5V10a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v11.5ZM8.5 19l4-16M12 19l4-16");
}
</style><path class="ctims06ca"/>`,
		"fallback": "uix:ski-touring",
	});
}

export default Component;
