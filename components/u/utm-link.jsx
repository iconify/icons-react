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
		"content": `<style>.bnecc_b5f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.75 9.5l-1 1a4 4 0 0 0 5.75 5.75l1-1m-2-9.5l1-1a4 4 0 0 1 5.75 5.75l-1 1m-7 1.25l4.5-4.5m1.75 6.25h3.75l3.5 3.5L18 21.75l-3.5-3.5Zm2.25 2.25h.01");
}
</style><path class="bnecc_b5f"/>`,
		"fallback": "uix-sharp:utm-link",
	});
}

export default Component;
