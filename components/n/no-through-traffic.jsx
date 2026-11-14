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
		"content": `<style>.brbar5b2u {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0Zm3-6.75l13.5 13.5M12 17.5V6.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdgxibs3k {
  d: path("M8.5 10L12 6.5l3.5 3.5");
}
</style><g class="ulnmmdpxh"><path class="brbar5b2u"/><path class="wdgxibs3k"/></g>`,
		"fallback": "uix-sharp:no-through-traffic",
	});
}

export default Component;
