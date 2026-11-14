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
		"content": `<style>.zw2ps2tqb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8.5a4 6.25 0 1 0 8 0a4 6.25 0 1 0-8 0Zm0 13l2.5-4h3l2.5 4Zm4.75-15.25l-1.5 4.5M11 8.25L13 9");
}
</style><path class="zw2ps2tqb"/>`,
		"fallback": "uix-sharp:kicking-tee",
	});
}

export default Component;
