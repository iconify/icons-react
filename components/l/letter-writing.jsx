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
		"content": `<style>.yqcrayboq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2 14c0-3.75 2.25-6.5 5-6.5s5 2.75 5 6.5m2.25-4l4.5-9a1.4 1.4 0 0 1 2.5 1.25l-4.5 9L15 20Zm3 4.5h3.5");
}
</style><path class="yqcrayboq"/>`,
		"fallback": "uix-sharp:letter-writing",
	});
}

export default Component;
