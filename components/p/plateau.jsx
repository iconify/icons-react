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
		"content": `<style>.e4u760bjp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 19l2.5-6l2-1l1.25-5.5H16l1.25 5l1.75 1l1.5 6.5m-18 0h19");
}
</style><path class="e4u760bjp"/>`,
		"fallback": "uix-sharp:plateau",
	});
}

export default Component;
