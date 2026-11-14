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
		"content": `<style>.h6tzb7bxg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 20.5L8.5 8l3-5L15 6l2 14.5m-13.5 0h17M11.5 3l1 6.5");
}
</style><path class="h6tzb7bxg"/>`,
		"fallback": "uix:menhir",
	});
}

export default Component;
