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
		"content": `<style>.jsthyab2p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15.5v-10a2.5 2.5 0 0 1 5 0v10a3.5 3.5 0 1 1-5 0Zm16.5-6.25a4.5 4.5 0 1 0 0 6.5M11.75 4.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM6.5 9v9");
}
</style><path class="jsthyab2p"/>`,
		"fallback": "uix-sharp:thermometer-celsius",
	});
}

export default Component;
