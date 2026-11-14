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
		"content": `<style>.m5mtbfbjc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M17.5 3.5H7l5.5 6.5L7 16.5h10.5M5 20.5h14");
}
</style><path class="m5mtbfbjc"/>`,
		"fallback": "uix-sharp:sum-row",
	});
}

export default Component;
