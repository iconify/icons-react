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

.lb1xdjb4z {
  d: path("M3.5 20.5L8 3.5m12.5 17L16 3.5M10 20c0-4.5 3-8.25 9.5-11");
}

.n64r3nqcd {
  d: path("M16.25 7.5L19.5 9l-1.75 3");
}
</style><g class="hntgybcog"><path class="lb1xdjb4z"/><path class="n64r3nqcd"/></g>`,
		"fallback": "uix:lane-departure",
	});
}

export default Component;
