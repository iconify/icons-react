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
		"content": `<style>.cl0-6ubwx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 13.75a6.5 6.5 0 0 1-1-6.5m2.25-3a6.5 6.5 0 0 1 7.5 0m2.25 3a6.5 6.5 0 0 1-1 6.5M9.5 17.5h5m-4 3h3");
}
</style><path class="cl0-6ubwx"/>`,
		"fallback": "uix-sharp:patent-pending",
	});
}

export default Component;
