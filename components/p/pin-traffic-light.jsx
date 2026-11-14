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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.su5vmfb9x {
  fill: currentColor;
  d: path("M10.75 6.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.vizb-e8yf {
  d: path("M12 2.5zA4.5 4.5 0 0 1 16.5 7v10a4.5 4.5 0 0 1-4.5 4.5A4.5 4.5 0 0 1 7.5 17V7A4.5 4.5 0 0 1 12 2.5");
}
</style><g class="hntgybcog"><path class="vizb-e8yf"/><path class="su5vmfb9x"/></g>`,
		"fallback": "uix:pin-traffic-light",
	});
}

export default Component;
