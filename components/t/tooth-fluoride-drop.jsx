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
		"content": `<style>.i7h6zqbnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 8.75c-2.5 0-3.25 1.5-3.25 3.5s1.25 3 1.75 4.5l1 4c.25 1 1.75 1 2 0l1-3.25c.25-1 3.25-1 3.5 0l1 3.25c.25 1 1.75 1 2 0l1-4c.5-1.5 1.75-2.5 1.75-4.5s-.75-3.5-3.25-3.5c-1.5 0-2.5 1.5-4.25 1.5s-2.75-1.5-4.25-1.5ZM12 2.25C11 3.5 10 4.5 10 5.5a2 2 0 0 0 4 0c0-1-1-2-2-3.25Z");
}
</style><path class="i7h6zqbnj"/>`,
		"fallback": "uix-sharp:tooth-fluoride-drop",
	});
}

export default Component;
