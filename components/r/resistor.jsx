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
		"content": `<style>.s9oi4tm5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12h3m0 0L7 8.5l2.5 7l2.5-7l2.5 7l2.5-7l1.5 3.5m0 0h3");
}
</style><path class="s9oi4tm5z"/>`,
		"fallback": "uix-sharp:resistor",
	});
}

export default Component;
