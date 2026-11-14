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

.p3k0ugovs {
  d: path("M2.5 9.5h19c0 7.5-4.5 12-9.5 12S2.5 17 2.5 9.5m12.065-7.048l-3.933 10.807");
}

.qataugbgm {
  d: path("M10.632 13.259za2.5 2.5 0 0 1 1.494 3.204l-.171.47a2.5 2.5 0 0 1-3.204 1.494a2.5 2.5 0 0 1-1.494-3.204l.171-.47a2.5 2.5 0 0 1 3.204-1.494");
}
</style><g class="hntgybcog"><path class="p3k0ugovs"/><path class="qataugbgm"/></g>`,
		"fallback": "uix:mixing-spatula",
	});
}

export default Component;
