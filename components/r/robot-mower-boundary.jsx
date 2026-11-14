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
		"content": `<style>.c66-hbb8h {
  d: path("M3 7.5V5a2 2 0 0 1 2-2h2.5m2.75 0h3.5m2.75 0H19a2 2 0 0 1 2 2v2.5m0 2.75v3.5m0 2.75V19a2 2 0 0 1-2 2h-2.5m-2.75 0h-3.5M7.5 21H5a2 2 0 0 1-2-2v-2.5m0-2.75v-3.5M6.5 14a5.5 5 0 0 1 11 0Z");
}

.fs4nfr1_u {
  d: path("M7 15.75a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m6.5 0a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c66-hbb8h"/><path class="fs4nfr1_u"/></g>`,
		"fallback": "uix:robot-mower-boundary",
	});
}

export default Component;
