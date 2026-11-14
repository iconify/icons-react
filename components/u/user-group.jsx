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
		"content": `<style>.t7-8lebcv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19.5c0-2.75 1.75-4.75 4-4.75s4 2 4 4.75c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1Zm11 0c0-2.75 1.75-4.75 4-4.75s4 2 4 4.75c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1Zm-10-11a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm11 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="t7-8lebcv"/>`,
		"fallback": "uix-sharp:user-group",
	});
}

export default Component;
