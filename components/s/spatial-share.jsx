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
		"content": `<style>.dhrom8bwg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 14h-14V2.5h15v9.6m1.75 2.65a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-5 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm5 2.75a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm-2.75-3.5l3-1.75m-3 3.25l3 1.25");
}
</style><path class="dhrom8bwg"/>`,
		"fallback": "uix-sharp:spatial-share",
	});
}

export default Component;
