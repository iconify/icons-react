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
		"content": `<style>.a6k62accz {
  d: path("M18 16.5V18l1.25 1");
}

.ihp8sr-9c {
  d: path("M4.75 11v-.5a7.25 7.25 0 0 1 14.5 0v.5M2.5 11H7v7H2.5ZM17 12v-1h4.5v2.1M4.75 18a3 3 0 0 0 3 3H10m4.75-3a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ihp8sr-9c"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:support-24-7",
	});
}

export default Component;
