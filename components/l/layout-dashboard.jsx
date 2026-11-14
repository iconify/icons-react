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
		"content": `<style>.fc7nm95id {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h4.5v18H3Zm7.5 0H21v8H10.5Zm0 11h3.75v7H10.5Zm6.75 0H21v7h-3.75Z");
}
</style><path class="fc7nm95id"/>`,
		"fallback": "uix-sharp:layout-dashboard",
	});
}

export default Component;
