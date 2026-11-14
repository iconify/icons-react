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
		"content": `<style>.bv2i16-fn {
  d: path("M15 6V3h2v4.75M8.75 7.5V10l-2.5 4h7l-2.5-4V7.5m9 8.75C19.5 15.5 18.9 15 18 15c-1.05 0-1.75.6-1.75 1.5c0 1.6 3.5.9 3.5 3c0 .9-.75 1.5-1.75 1.5c-.9 0-1.55-.4-1.75-1M18 13.75V15m0 6v1");
}

.ier96dboi {
  d: path("M13.16 19.5H3v-10l8-7l8 7v1.44");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ier96dboi"/><path class="bv2i16-fn"/></g>`,
		"fallback": "uix-sharp:lab-funding",
	});
}

export default Component;
