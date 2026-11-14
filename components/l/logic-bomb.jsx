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
		"content": `<style>.t3vbf9bsa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 14a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm10.5-4.5l2.75-2.75M17.5 3v1.5m3 2H19m1-2.75l-1 1M10.5 14v-3m0 3l2.5 1.25");
}
</style><path class="t3vbf9bsa"/>`,
		"fallback": "uix-sharp:logic-bomb",
	});
}

export default Component;
