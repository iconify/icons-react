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
		"content": `<style>.c4yce5bdg {
  cx: 5.25px;
  cy: 19px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pf0l2ptyv {
  cx: 5.25px;
  cy: 12px;
  r: 1.75px;
}

.pf68-yb5h {
  d: path("M5.25 7.5v2m0 5v2M10 5h11.25M10 12h9m-9 7h6");
}

.qi_z9gbzx {
  cx: 5.25px;
  cy: 5px;
  r: 1.75px;
}
</style><g class="hntgybcog"><circle class="qi_z9gbzx"/><circle class="pf0l2ptyv"/><circle class="c4yce5bdg"/><path class="pf68-yb5h"/></g>`,
		"fallback": "iconoven:reasoning-steps",
	});
}

export default Component;
