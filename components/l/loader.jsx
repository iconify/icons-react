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

.m-qubib1j {
  d: path("M13 5.75h8.25M13 9.25h5m-15.25 6.5h18.5m-18.5 4h12");
}

.p_rn8pbth {
  cx: 6.5px;
  cy: 7.5px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="p_rn8pbth"/><path class="m-qubib1j"/></g>`,
		"fallback": "iconoven:loader",
	});
}

export default Component;
