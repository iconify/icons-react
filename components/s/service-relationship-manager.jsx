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
		"content": `<style>.qp_47d5fe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7.5a4 4 0 1 0 8 0a4 4 0 1 0-8 0ZM4 21c0-3.949 3.411-6.436 7.828-6.499m3.922-.001c-.75 0-1.25.5-1.25 1.25c0 3.25 2.5 5.75 5.75 5.75c.75 0 1.25-.5 1.25-1.25V19l-2-.75l-1 1c-.75-.5-1.25-1-1.75-1.75l1-1l-.75-2Z");
}
</style><path class="qp_47d5fe"/>`,
		"fallback": "uix-sharp:service-relationship-manager",
	});
}

export default Component;
