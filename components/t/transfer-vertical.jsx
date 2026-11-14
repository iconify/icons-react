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
		"content": `<style>.o8lfowt6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15 5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 4v11m3.5-3.5L17 20l-3.5-3.5M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2-4V4m3.5 3.5L7 4L3.5 7.5");
}
</style><path class="o8lfowt6e"/>`,
		"fallback": "uix:transfer-vertical",
	});
}

export default Component;
