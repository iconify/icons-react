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
		"content": `<style>.q_axw1ida {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 13V7.5L12 3l7 4.5V13Zm2 0l-1.5 8.5M17 13l1.5 8.5m-12.25-4h11.5");
}
</style><path class="q_axw1ida"/>`,
		"fallback": "uix-sharp:pin-water-tower",
	});
}

export default Component;
