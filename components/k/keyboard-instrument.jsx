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
		"content": `<style>.gj4dj35le {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4h19v9h-19ZM6 13v7.5M18 13v7.5M6.5 4v5m3-5v5m5-5v5m3-5v5");
}
</style><path class="gj4dj35le"/>`,
		"fallback": "uix-sharp:keyboard-instrument",
	});
}

export default Component;
