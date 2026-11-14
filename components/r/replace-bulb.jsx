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
		"content": `<style>.dgg9zwmou {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 16.5c0-1.75-3-3.25-3-7a6 6 0 0 1 12 0c0 3.75-3 5.25-3 7Zm.5 3.25h5M18 12.5a3.5 3.5 0 1 1-3.5 3.5m3.5-5.75v2.25h2.25");
}
</style><path class="dgg9zwmou"/>`,
		"fallback": "uix-sharp:replace-bulb",
	});
}

export default Component;
