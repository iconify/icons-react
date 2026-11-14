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

.n_8m_fxbw {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m9.5-2l3-4.5");
}

.ycbynlbww {
  d: path("M8 13h8m-1.25-1.25L16 13l-1.25 1.25M16 17H8m1.25-1.25L8 17l1.25 1.25");
}
</style><g class="hntgybcog"><path class="n_8m_fxbw"/><path class="ycbynlbww"/></g>`,
		"fallback": "uix:net-metering",
	});
}

export default Component;
