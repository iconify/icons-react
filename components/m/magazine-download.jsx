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
		"content": `<style>.lzn3azb4b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.1 20.5H4v-18h14v9.2M7 6.5h8m-8 4h4.5m6.5 4v7m-3-3l3 3l3-3");
}
</style><path class="lzn3azb4b"/>`,
		"fallback": "uix-sharp:magazine-download",
	});
}

export default Component;
