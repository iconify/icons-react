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
		"content": `<style>.zedt9cc-e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9 19l4-12h3.5L22 19M2 19h20M2 10h10M2 14.5q1.5-1.25 3 0t3 0");
}
</style><path class="zedt9cc-e"/>`,
		"fallback": "uix-sharp:tailings-dam",
	});
}

export default Component;
