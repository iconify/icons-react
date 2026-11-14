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
		"content": `<style>.g5-io20tj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h12m-6 0v8.5m-3.5 0h7l-2.75 8.25q-.75 1.5-1.5 0Z");
}
</style><path class="g5-io20tj"/>`,
		"fallback": "uix-sharp:plumb-line",
	});
}

export default Component;
