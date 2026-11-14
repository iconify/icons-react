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
		"content": `<style>.dxtia4tkm {
  d: path("M6 14a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x-knmab1h {
  d: path("M9.5 14a2.5 6 0 1 0 5 0a2.5 6 0 1 0-5 0M6 14h12M3.073 10.751a9.5 9.5 0 0 1 5.678-5.678m6.498 0a9.5 9.5 0 0 1 5.678 5.678");
}
</style><g class="hntgybcog"><path class="dxtia4tkm"/><path class="x-knmab1h"/></g>`,
		"fallback": "uix:ozone-hole",
	});
}

export default Component;
