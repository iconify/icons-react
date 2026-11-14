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
		"content": `<style>.qdygkqfuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0Zm4.5-4h9M10 6.75v2.5M7 12h10m-2.5-1.25v2.5M7.5 16h9m-7-1.25v2.5");
}
</style><path class="qdygkqfuq"/>`,
		"fallback": "uix-sharp:sensor-settings",
	});
}

export default Component;
