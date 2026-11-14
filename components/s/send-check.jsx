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
		"content": `<style>.xsal72d9q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 8l12.5-5l-5 12.5l-2.5-5Zm5 2.5L15.5 3m-.75 15l2 2L21 15.75");
}
</style><path class="xsal72d9q"/>`,
		"fallback": "uix-sharp:send-check",
	});
}

export default Component;
