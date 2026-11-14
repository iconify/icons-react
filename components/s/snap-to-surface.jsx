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
		"content": `<style>.cyzt9bb7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 2.5h7v7h-7ZM12 12v2.75m-2-2l2 2l2-2M6 17.5h15L18 21H3Z");
}
</style><path class="cyzt9bb7o"/>`,
		"fallback": "uix-sharp:snap-to-surface",
	});
}

export default Component;
