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
		"content": `<style>.fvd3468ev {
  d: path("M8 7C4.5 4.5 2.5 6 2.5 9.5s3 5 6.5 2.5m7-5c3.5-2.5 5.5-1 5.5 2.5s-3 5-6.5 2.5m-4.5-3h.01m2.99 0h.01");
}

.l4jllbhbn {
  d: path("M13.5 13.5V19a1.5 1.5 0 0 1-3 0v-5.5C9 12.5 8 11 8 8.5c0-3.5 1.75-5 4-5s4 1.5 4 5c0 2.5-1 4-2.5 5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="l4jllbhbn"/><path class="fvd3468ev"/></g>`,
		"fallback": "uix-sharp:pin-zoo",
	});
}

export default Component;
