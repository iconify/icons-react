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
		"content": `<style>.dld8vub9v {
  cx: 12px;
  cy: 8.5px;
  r: 5.75px;
}

.egcnl37_d {
  d: path("m10.75 6.75l1.5-1.25v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wgb-elboi {
  d: path("M8 12.63L6.5 20.5l2.25-1.25l1.5 1.75l.25-6.95A5.75 5.75 0 0 1 8 12.63m8 0l1.5 7.87l-2.25-1.25l-1.5 1.75l-.25-6.95a5.75 5.75 0 0 0 2.5-1.42");
}
</style><g class="hntgybcog"><path class="wgb-elboi"/><circle class="dld8vub9v"/><path class="egcnl37_d"/></g>`,
		"fallback": "iconoven:milestone-badge",
	});
}

export default Component;
