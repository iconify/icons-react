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
		"content": `<style>.ahk8ryb5r {
  d: path("M6.125 3h4.75A2.625 2.625 0 0 1 13.5 5.625v12.75A2.625 2.625 0 0 1 10.875 21h-4.75A2.625 2.625 0 0 1 3.5 18.375V5.625A2.625 2.625 0 0 1 6.125 3");
}

.glgnwcckt {
  d: path("M8 6h1a1.5 1.5 0 0 1 1.5 1.5V8A1.5 1.5 0 0 1 9 9.5H8A1.5 1.5 0 0 1 6.5 8v-.5A1.5 1.5 0 0 1 8 6m5.5 4H16a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 0 3 0V7L18 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ahk8ryb5r"/><path class="glgnwcckt"/></g>`,
		"fallback": "uix:pin-fuel",
	});
}

export default Component;
