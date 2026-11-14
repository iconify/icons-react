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
		"content": `<style>.e28w9zbqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.681 14.319L11.5 16.5L5 10l6.5-6.5L18 10l-2.197 2.197M2 10h3m13 0h4m-5.5 5v6.5M20 15v6.5");
}
</style><path class="e28w9zbqe"/>`,
		"fallback": "uix-sharp:milestone-paused",
	});
}

export default Component;
