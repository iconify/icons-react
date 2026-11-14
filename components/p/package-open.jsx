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
		"content": `<style>.wv1c-lbxt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.5 12l8.5 3.5l8.5-3.5v7L12 22l-8.5-3Zm0 0L7 5.5L12 8l5-2.5l3.5 6.5");
}
</style><path class="wv1c-lbxt"/>`,
		"fallback": "uix-sharp:package-open",
	});
}

export default Component;
