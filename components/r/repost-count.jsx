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
		"content": `<style>.cgxli1bfe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 6.75A7.5 7.5 0 0 1 19.5 12m-1.75-1.75L19.5 12l1.75-1.75m-4 7A7.5 7.5 0 0 1 4.5 12m-1.75 1.75L4.5 12l1.75 1.75m2.75-4v4.5m3-4.5v4.5m3-4.5v4.5");
}
</style><path class="cgxli1bfe"/>`,
		"fallback": "uix-sharp:repost-count",
	});
}

export default Component;
