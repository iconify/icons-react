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
		"content": `<style>.t0ylwzb7d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 18l4.5-5.5L11 15m2-2l1.5-1.5m2-2L18 8m2.25-2.25h.01");
}
</style><path class="t0ylwzb7d"/>`,
		"fallback": "uix-sharp:trend-forecast",
	});
}

export default Component;
