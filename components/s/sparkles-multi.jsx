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
		"content": `<style>.oy4vl9bin {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 6.75c.25 4 2 6.25 5.5 6.75c-3.5.5-5.25 2.75-5.5 6.75c-.25-4-2-6.25-5.5-6.75c3.5-.5 5.25-2.75 5.5-6.75m9-4.25c.25 1.75 1 2.75 2.75 3c-1.75.25-2.5 1.25-2.75 3c-.25-1.75-1-2.75-2.75-3c1.75-.25 2.5-1.25 2.75-3M19 16v5m-2.5-2.5h5");
}
</style><path class="oy4vl9bin"/>`,
		"fallback": "uix:sparkles-multi",
	});
}

export default Component;
