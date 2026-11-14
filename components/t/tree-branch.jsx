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
		"content": `<style>.qxyu0-bel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5v19m0-9.5L13 7.5l2 1.25L3.5 17.5m9.5-10l2.5-4m0 0c1-1.5 4-1.5 5 0c-1 1.5-4 1.5-5 0M15 8.75c1.75-1.25 4.5-.25 5.5 2.25c-2.5.25-4.75-.5-5.5-2.25");
}
</style><path class="qxyu0-bel"/>`,
		"fallback": "uix:tree-branch",
	});
}

export default Component;
