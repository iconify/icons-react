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
		"content": `<style>.acqd5qb6b {
  cx: 12px;
  cy: 19px;
  r: 2.25px;
}

.gkrqf9ahv {
  d: path("m10.54 17.29l-3.08-3.58m6 3.58l3.08-3.58M6 9.75v-2.5m12 2.5v-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iv8fwcb7u {
  cx: 6px;
  cy: 5px;
  r: 2.25px;
}

.k-k8m_51k {
  cx: 18px;
  cy: 12px;
  r: 2.25px;
}

.tz8y8z-uo {
  cx: 6px;
  cy: 12px;
  r: 2.25px;
}

.yssos9efq {
  cx: 18px;
  cy: 5px;
  r: 2.25px;
}
</style><g class="hntgybcog"><circle class="acqd5qb6b"/><circle class="tz8y8z-uo"/><circle class="k-k8m_51k"/><circle class="iv8fwcb7u"/><circle class="yssos9efq"/><path class="gkrqf9ahv"/></g>`,
		"fallback": "iconoven:skill-tree",
	});
}

export default Component;
