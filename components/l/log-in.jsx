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
		"content": `<style>.h0p48ngvy {
  d: path("M14 4h3.5A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5H14M3.5 12h11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v3ba8w4_l {
  d: path("m10.5 8l4 4l-4 4");
}
</style><g class="hntgybcog"><path class="h0p48ngvy"/><path class="v3ba8w4_l"/></g>`,
		"fallback": "uix:log-in",
	});
}

export default Component;
