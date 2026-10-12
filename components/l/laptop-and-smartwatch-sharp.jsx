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
		"content": `<style>.vwb5ecpie {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 3h14v6h-7v5h-9V3zm-3 14.25h10m3-4h5.5v5h-5.5zm2.75 0V11.5m0 6.75V20");
}
</style><path class="vwb5ecpie"/>`,
		"fallback": "iconoven:laptop-and-smartwatch-sharp",
	});
}

export default Component;
