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
		"content": `<style>.daccwablj {
  d: path("M10.5 12a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0M3.75 5.25l1.5 1.5m15-1.5l-1.5 1.5m-15 12l1.5-1.5m15 1.5l-1.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sjlw05tzm {
  d: path("M6 12a3.75 3.75 0 1 0 7.5 0A3.75 3.75 0 1 0 6 12");
}
</style><g class="hntgybcog"><path class="sjlw05tzm"/><path class="daccwablj"/></g>`,
		"fallback": "uix:nuclear-fusion",
	});
}

export default Component;
