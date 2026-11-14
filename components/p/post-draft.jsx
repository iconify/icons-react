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
		"content": `<style>.l8-lsqw8f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 21.5H3.5v-19h15v7.1M7 7h8m-8 4h8m-8 4h4m2 6l.5-2.5l6-6l2 2l-6 6Z");
}
</style><path class="l8-lsqw8f"/>`,
		"fallback": "uix-sharp:post-draft",
	});
}

export default Component;
