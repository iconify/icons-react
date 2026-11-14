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
		"content": `<style>.ogica2bzl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 10a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM3 12.5h9.5m-10 3H17m-12 0l1.5 3h12a2 2 0 0 0 2-2");
}
</style><path class="ogica2bzl"/>`,
		"fallback": "uix-sharp:skeleton-slider",
	});
}

export default Component;
