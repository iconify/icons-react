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
		"content": `<style>.zugrmjbew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c0-2.75 2.9-4.75 6.5-4.75s6.5 2 6.5 4.75c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1ZM5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Zm13.25 5.5s-3-2-3-4.25c0-1 .8-1.75 1.75-1.75c.55 0 1 .25 1.25.75c.25-.5.7-.75 1.25-.75c.95 0 1.75.75 1.75 1.75c0 2.25-3 4.25-3 4.25Z");
}
</style><path class="zugrmjbew"/>`,
		"fallback": "uix-sharp:user-heart",
	});
}

export default Component;
