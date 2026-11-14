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
		"content": `<style>.uydtsg4pq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M1.04 9.525L9.525 1.04l4.243 4.242l-8.486 8.486Zm7.424 1.061l2.122-2.122l9.192 9.193l-2.121 2.121Z");
}
</style><path class="uydtsg4pq"/>`,
		"fallback": "uix-sharp:sledgehammer",
	});
}

export default Component;
