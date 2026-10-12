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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wisbhtbep {
  d: path("M12 8a4 4 0 1 0 0 8a4 4 0 1 0 0-8m2.75 1.25L18.5 5.5M9.25 9.25L5.5 5.5m3.75 9.25L5.5 18.5m9.25-3.75l3.75 3.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="wisbhtbep"/></g>`,
		"fallback": "iconoven:life-buoy",
	});
}

export default Component;
