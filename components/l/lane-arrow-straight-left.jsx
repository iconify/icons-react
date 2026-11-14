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
		"content": `<style>.ax7knly_p {
  d: path("M15 21.5V3m-5 5l5-5l5 5m-5 12a5 5 0 0 0-5-5H4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.inarun7bo {
  d: path("M7.5 11.5L4 15l3.5 3.5");
}
</style><g class="hntgybcog"><path class="ax7knly_p"/><path class="inarun7bo"/></g>`,
		"fallback": "uix:lane-arrow-straight-left",
	});
}

export default Component;
