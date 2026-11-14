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
		"content": `<style>.jss9ka_7r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v9m0 4v5m7-18v2.5m0 4V21m7-18v11.5m0 4V21M3 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7-6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm7 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="jss9ka_7r"/>`,
		"fallback": "uix-sharp:settings-sliders-vertical",
	});
}

export default Component;
