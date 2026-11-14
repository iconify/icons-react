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
		"content": `<style>.i39374b-q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5L12 9h-1.5l2.5 6H2l2.5-6H3Zm0 12.5v6.5m11-11.5l3.25 7.5h-6.5Zm0 7.5v4");
}
</style><path class="i39374b-q"/>`,
		"fallback": "uix-sharp:pin-forest",
	});
}

export default Component;
