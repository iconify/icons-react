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
		"content": `<style>.c_wa01bel {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12A2.25 2.25 0 1 0 7 12a2.25 2.25 0 1 0-4.5 0ZM17 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-5-3V6.5m0 8.5v2.5m2.25-7.75L16 8M9.75 9.75L8 8m6.25 6.25L16 16m-6.25-1.75L8 16");
}
</style><path class="c_wa01bel"/>`,
		"fallback": "uix-sharp:particle-collision",
	});
}

export default Component;
