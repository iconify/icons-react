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

.o8ge3ybhm {
  d: path("M17.116 17.116za1.25 1.25 0 0 1 1.768 0a1.25 1.25 0 0 1 0 1.768a1.25 1.25 0 0 1-1.768 0a1.25 1.25 0 0 1 0-1.768");
}

.odp-5dbbs {
  d: path("M11.872 20.5H4c-.6 0-1-.4-1-1c0-3.25 3.25-5.5 7.5-5.5c1.478 0 2.835.272 3.976.764M6.5 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0m8.672 11L18 15.172a2 2 0 0 1 2.828 0a2 2 0 0 1 0 2.828L18 20.828a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828");
}
</style><g class="hntgybcog"><path class="odp-5dbbs"/><path class="o8ge3ybhm"/></g>`,
		"fallback": "uix:vaccinated",
	});
}

export default Component;
