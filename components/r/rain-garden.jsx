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
		"content": `<style>.rk5-occtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18l-1.5 6h-15Zm9 0V8m0 2.5C12 8 14 7 16.5 7c0 2.5-2 3.5-4.5 3.5m0 1.75c0-2.5-2-3.5-4.5-3.5c0 2.5 2 3.5 4.5 3.5M5.5 2.5l-1 3M12.25 2l-.75 2.75M20 3l-.75 2.75");
}
</style><path class="rk5-occtn"/>`,
		"fallback": "uix-sharp:rain-garden",
	});
}

export default Component;
