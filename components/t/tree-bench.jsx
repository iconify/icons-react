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
		"content": `<style>.n9oqvelly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12a3 3 0 0 1 1-5.75a4 4 0 0 1 8 0A3 3 0 0 1 17 12Zm5 0v3m-9 2a9 2 0 1 0 18 0a9 2 0 1 0-18 0m2 1.25v3.25m7-2.5v2.5m7-3.25v3.25");
}
</style><path class="n9oqvelly"/>`,
		"fallback": "uix:tree-bench",
	});
}

export default Component;
