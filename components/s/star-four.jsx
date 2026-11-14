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
		"content": `<style>.spiocbcpa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 3.5l2.475 6.025L20.5 12l-6.025 2.475L12 20.5l-2.475-6.025L3.5 12l6.025-2.475Z");
}
</style><path class="spiocbcpa"/>`,
		"fallback": "uix-sharp:star-four",
	});
}

export default Component;
