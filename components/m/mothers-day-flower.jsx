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
		"content": `<style>.axhooac4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 5a1.75 1.75 0 0 1 3.5 0A1.75 1.75 0 0 1 12 5a1.75 1.75 0 0 1 3.5 0A1.75 1.75 0 0 1 19 5c0 4-3 6-7 6S5 9 5 5Zm7 6v9.5m0-3c.5-3 3.5-4.5 6.5-4c-.5 3-3.5 4.5-6.5 4Z");
}
</style><path class="axhooac4s"/>`,
		"fallback": "uix-sharp:mothers-day-flower",
	});
}

export default Component;
