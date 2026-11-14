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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uwz8n-b0s {
  d: path("M12.064 18.938L10.5 18L8 19.5L5.75 18L3.5 19.5v-17h14V12M7 14.5L14 6M7.5 7.5h.01M13.5 13h.01m1.24 5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0");
}
</style><g class="hntgybcog"><path class="uwz8n-b0s"/><path class="a6k62accz"/></g>`,
		"fallback": "uix:tax-bill-due",
	});
}

export default Component;
