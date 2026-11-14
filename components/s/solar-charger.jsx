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
		"content": `<style>.y6jswtbme {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3h16.5L19 12.5H2.5ZM3.75 7.75h16.5m-7-4.75l-2.5 9.5m0 0v6.4m-3.25.6h2.7m9.3-5L15 18.75h3l-1.5 3l4.5-4.5h-3Z");
}
</style><path class="y6jswtbme"/>`,
		"fallback": "uix-sharp:solar-charger",
	});
}

export default Component;
