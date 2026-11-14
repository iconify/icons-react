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
		"content": `<style>.vo44gbbsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 3h-.5a2 2 0 0 0-2 2v4.5A2.5 2.5 0 0 1 3 12a2.5 2.5 0 0 1 2.5 2.5V19a2 2 0 0 0 2 2H8m8-18h.5a2 2 0 0 1 2 2v4.5A2.5 2.5 0 0 0 21 12a2.5 2.5 0 0 0-2.5 2.5V19a2 2 0 0 1-2 2H16m-7.25-8.5L11 14.75l4.25-5");
}
</style><path class="vo44gbbsi"/>`,
		"fallback": "uix-sharp:json-schema",
	});
}

export default Component;
