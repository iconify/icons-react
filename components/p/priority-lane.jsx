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
		"content": `<style>.qa1-rrbjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5.5v14m14-14v7m-16.5 9h5M3.75 3.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm14 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM5 8q7 3.5 14 0m-1 13.5l-2.75-2.75c-1-1-.75-3.5 1-3.5c1 0 1.5.75 1.75 1.25c.25-.5.75-1.25 1.75-1.25c1.75 0 2 2.5 1 3.5Z");
}
</style><path class="qa1-rrbjc"/>`,
		"fallback": "uix-sharp:priority-lane",
	});
}

export default Component;
