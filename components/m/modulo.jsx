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

.rf72_lb5i {
  cx: 12px;
  cy: 13.5px;
  r: 7px;
}

.t0i-32bdb {
  d: path("M12 9.5V8m3.46 7.5l1.3.75m-8.22-.75l-1.3.75M6.41 5.51a9.75 9.75 0 0 1 11.18 0m-.64-2.41l.64 2.41l-2.49.22");
}
</style><g class="hntgybcog"><circle class="rf72_lb5i"/><path class="t0i-32bdb"/></g>`,
		"fallback": "iconoven:modulo",
	});
}

export default Component;
