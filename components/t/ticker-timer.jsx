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

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v62wuxbyi {
  d: path("M21.5 4.5H4A1.5 1.5 0 0 0 2.5 6v4.5A1.5 1.5 0 0 0 4 12h17.5m-16-3.75h.01m2.99 0h.01m3.99 0h.01m5.49 0h.01M14.75 18a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="v62wuxbyi"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:ticker-timer",
	});
}

export default Component;
