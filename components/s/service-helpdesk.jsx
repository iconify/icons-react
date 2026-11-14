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
		"content": `<style>.j0cmnzb7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h19m-17 0v7m15-7v7M7 14a5 5 0 0 1 10 0m-5-7.5V9m-1.5-2.5h3");
}
</style><path class="j0cmnzb7t"/>`,
		"fallback": "uix-sharp:service-helpdesk",
	});
}

export default Component;
