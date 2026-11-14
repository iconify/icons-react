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
		"content": `<style>.folxou4lh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.5h11V12h-11Zm1 0l1.5-3l1.5 3l1.5-3l1.5 3l1.5-3l1.5 3m-10 3l-1.25 4.75M17.5 10.5l1.25 4.75M2.5 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="folxou4lh"/>`,
		"fallback": "uix-sharp:steering-rack",
	});
}

export default Component;
