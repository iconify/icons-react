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
		"content": `<style>.hlqqov2tw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11.5h12v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm12 1h1.5a2.25 2.25 0 0 1 0 4.5H16m-3.5-8.25c-1-1.5 1-3 0-4.5M8 11.5L6 7M4.5 4h3v3h-3Z");
}
</style><path class="hlqqov2tw"/>`,
		"fallback": "uix-sharp:pin-tea",
	});
}

export default Component;
