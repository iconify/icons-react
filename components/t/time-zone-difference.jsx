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
		"content": `<style>.uybn9eb9k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm11 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0Zm-6.5 0V9.5m0 2.5L8 13m9.5-1V9.5m0 2.5l1.5 1");
}
</style><path class="uybn9eb9k"/>`,
		"fallback": "uix-sharp:time-zone-difference",
	});
}

export default Component;
