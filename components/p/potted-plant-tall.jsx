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
		"content": `<style>.l7pde5bfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 16h8l-1 5.5H9Zm4 0V2.5m0 8.5c-3.5 0-6-2-6.5-5c3.5 0 6 2 6.5 5Zm0 3c3.5 0 6-2 6.5-5c-3.5 0-6 2-6.5 5Zm0-7.5c2.5 0 4.5-1.5 5-4c-2.5 0-4.5 1.5-5 4Z");
}
</style><path class="l7pde5bfk"/>`,
		"fallback": "uix-sharp:potted-plant-tall",
	});
}

export default Component;
