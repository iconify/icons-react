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
		"content": `<style>.wf0jz4bht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.25 16.25V8.5a4.75 4.75 0 0 0-9.5 0v1.6L6.6 8.7a1.9 1.9 0 0 0-2.4 2.9l4.55 4.65Zm-7-6.25h4M7.5 18.5H19v2.75H7.5z");
}
</style><path class="wf0jz4bht"/>`,
		"fallback": "iconoven:oven-mitt-sharp",
	});
}

export default Component;
