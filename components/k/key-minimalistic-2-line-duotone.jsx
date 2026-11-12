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
		"content": `<style>.c1pmiebpv {
  cx: 15px;
  cy: 9px;
  r: 2px;
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jlbwv3bdp {
  d: path("M6 21L4.5 19.5M6.5 17.5L8 19");
}

.lgpmj5glp {
  cx: 15px;
  cy: 9px;
  r: 7px;
}

.ux2n7ervq {
  d: path("M3.5 20.5L9.5 14.5");
}
</style><g class="ipq1z-bjh"><circle class="lgpmj5glp"/><circle class="c1pmiebpv"/><path class="ux2n7ervq"/><path class="jlbwv3bdp"/></g>`,
		"fallback": "solar:key-minimalistic-2-line-duotone",
	});
}

export default Component;
