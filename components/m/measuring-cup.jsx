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
		"content": `<style>.qcvu3jben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7h12l-1 12c-.2 1-1 1.5-2 1.5H8c-1 0-1.8-.5-2-1.5Zm12 2c3.5 0 3.5 5-.5 5m-10-2h3m-3 4h3");
}
</style><path class="qcvu3jben"/>`,
		"fallback": "uix-sharp:measuring-cup",
	});
}

export default Component;
