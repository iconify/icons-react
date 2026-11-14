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

.irexg0bdm {
  d: path("M12.064 18.938L10.5 18L8 19.5L5.75 18L3.5 19.5v-17h14V12M7 14.5L14 6M7.5 7.5h.01M13.5 13h.01m1.24 5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="irexg0bdm"/><path class="a6k62accz"/></g>`,
		"fallback": "uix-sharp:tax-bill-due",
	});
}

export default Component;
