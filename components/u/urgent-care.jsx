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
		"content": `<style>.b0aka0dty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 10.5L12 3.25l8.5 7.25v10h-17Zm8.5 1v6m-3-3h6");
}
</style><path class="b0aka0dty"/>`,
		"fallback": "uix-sharp:urgent-care",
	});
}

export default Component;
