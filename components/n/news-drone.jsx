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
		"content": `<style>.j-nnz2bcc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 4.5V9h13V4.5m-8 4.5h3a2 2 0 0 1 2 2a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-8-4.5h6m7 0h6M10 17.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="j-nnz2bcc"/>`,
		"fallback": "uix:news-drone",
	});
}

export default Component;
