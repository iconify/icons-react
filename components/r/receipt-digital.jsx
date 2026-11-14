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
		"content": `<style>.vx0ws5zdu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v19H6Zm3 4h6M9 10h6m-6 3.5h3.5m-2 4.5h3");
}
</style><path class="vx0ws5zdu"/>`,
		"fallback": "uix-sharp:receipt-digital",
	});
}

export default Component;
