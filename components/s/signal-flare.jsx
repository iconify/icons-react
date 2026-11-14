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
		"content": `<style>.yn_wabgou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 11h4v10.5h-4Zm2-8q3.75 3.75 1.5 6h-3Q8.25 6.75 12 3ZM6 5l1.5 1.5M18 5l-1.5 1.5M5.5 10H7m11.5 0H17");
}
</style><path class="yn_wabgou"/>`,
		"fallback": "uix-sharp:signal-flare",
	});
}

export default Component;
