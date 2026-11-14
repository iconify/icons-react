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
		"content": `<style>.sxwbsachh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6 10l1 10c.1 1 .5 1.5 1.5 1.5h7c1 0 1.4-.5 1.5-1.5l1-10m-5-1v9.5m-1.75-16h3.5V9h-3.5ZM8.5 4h2.75M8.5 7h2.75");
}
</style><path class="sxwbsachh"/>`,
		"fallback": "uix-sharp:toothbrush-holder",
	});
}

export default Component;
