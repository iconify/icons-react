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
		"content": `<style>.wwzfdrben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M11 3.5l-5.5 16m11-16l-5.5 16m-1.25-12H15m-6.75 4h5.5M7 15.5h5.25M4.5 20.75a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm5.5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}
</style><path class="wwzfdrben"/>`,
		"fallback": "uix-sharp:rolling-ladder",
	});
}

export default Component;
