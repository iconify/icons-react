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
		"content": `<style>.c0gniqblk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11h12l-6 10.5Zm0 0a3 3 0 0 1 1.25-4.25a5 5 0 0 1 9.5 0A3 3 0 0 1 18 11");
}
</style><path class="c0gniqblk"/>`,
		"fallback": "uix-sharp:pin-ice-cream",
	});
}

export default Component;
