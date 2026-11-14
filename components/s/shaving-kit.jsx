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
		"content": `<style>.eaan1nvaa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.652 3.856l8.485 8.485l-2.475 2.475l-8.485-8.485Zm1.767 6.717l-3.182 3.182m-.883-.884l1.767 1.768l-6.01 6.01l-1.768-1.767Z");
}
</style><path class="eaan1nvaa"/>`,
		"fallback": "uix-sharp:shaving-kit",
	});
}

export default Component;
