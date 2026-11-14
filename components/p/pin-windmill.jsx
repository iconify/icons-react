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
		"content": `<style>.d-wz3pjpu {
  d: path("M10.5 21.5v-3a1.5 1.5 0 0 1 3 0v3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kpkshsyom {
  d: path("M7 21.5L9 11h6l2 10.5Zm-.5-19l11 11m0-11l-11 11");
}
</style><g class="hntgybcog"><path class="kpkshsyom"/><path class="d-wz3pjpu"/></g>`,
		"fallback": "uix:pin-windmill",
	});
}

export default Component;
