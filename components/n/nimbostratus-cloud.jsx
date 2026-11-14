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
		"content": `<style>.lay4nyu-f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 14a3.5 3.5 0 0 1 0-7a3.5 3.5 0 0 1 6-1.5A3.5 3.5 0 0 1 18 7a3.5 3.5 0 0 1 0 7Zm1 3l-1 3.5m6-3.5l-1 3.5m6-3.5l-1 3.5");
}
</style><path class="lay4nyu-f"/>`,
		"fallback": "uix-sharp:nimbostratus-cloud",
	});
}

export default Component;
