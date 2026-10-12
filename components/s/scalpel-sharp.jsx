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
		"content": `<style>.drlraigwa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 20.5L13 12m-1.1-1.1l5.85-5.85c1.25-1.25 2.6-1.85 3.2-1.6c.25.6-.35 1.95-1.6 3.2L14.1 13.1Z");
}
</style><path class="drlraigwa"/>`,
		"fallback": "iconoven:scalpel-sharp",
	});
}

export default Component;
