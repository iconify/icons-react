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
		"content": `<style>.wrt059d1b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.772 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5q.865 0 1.666.121M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm8.5 9.25h6m-1.75-1.75L21 16.25m0 3.5h-6m1.75 1.75L15 19.75");
}
</style><path class="wrt059d1b"/>`,
		"fallback": "uix-sharp:lead-convert",
	});
}

export default Component;
