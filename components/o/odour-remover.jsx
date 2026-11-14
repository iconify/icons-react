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
		"content": `<style>.x5z0oeb-g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5V13a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8.5ZM6.5 11V5a1 1 0 0 1 1-1h6v3H10v4m2-4l1.75 2.25m2.75-6.5q1.25-.75 2.5 0t2.5 0m-5 3q1.25-.75 2.5 0t2.5 0m-5 3q1.25-.75 2.5 0t2.5 0");
}
</style><path class="x5z0oeb-g"/>`,
		"fallback": "uix:odour-remover",
	});
}

export default Component;
