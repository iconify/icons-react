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
		"content": `<style>.evgljebub {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 18h18l-2.5 3h-13Zm5 0V3m0 .5c8-1 14.5 4.5 12 9.5c-1 1.25-3 2-5.5 2C13 11 11 6.5 8 3.5Zm0 5L4.5 15H8");
}
</style><path class="evgljebub"/>`,
		"fallback": "uix-sharp:spinnaker",
	});
}

export default Component;
