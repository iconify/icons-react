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
		"content": `<style>.jar2hqmam {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11h18c0 5-4 8.5-9 8.5S3 16 3 11Zm3.5 0c1-5 3.5-7 5.5-7s4.5 2 5.5 7");
}
</style><path class="jar2hqmam"/>`,
		"fallback": "uix-sharp:lifting-chalk-bowl",
	});
}

export default Component;
