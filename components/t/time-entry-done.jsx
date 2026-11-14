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
		"content": `<style>.s7v73ac1b {
  d: path("m14.5 18l2.5 2.5l4.5-5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x3uwmob_u {
  d: path("M14.1 21.5H4.5v-19h15v11.1m-15-6.1h15m-15 5h15m-10-5v14");
}
</style><g class="ulnmmdpxh"><path class="x3uwmob_u"/><path class="s7v73ac1b"/></g>`,
		"fallback": "uix-sharp:time-entry-done",
	});
}

export default Component;
