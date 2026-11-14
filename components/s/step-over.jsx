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
		"content": `<style>.awws5--wg {
  d: path("M3 16a8 8 0 0 1 16 0");
}

.ckqc5tb9v {
  fill: currentColor;
  d: path("M8.5 18.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.negtm6pnb {
  d: path("M16.25 13.25L19 16l2.75-2.75");
}
</style><g class="hntgybcog"><path class="awws5--wg"/><path class="negtm6pnb"/><path class="ckqc5tb9v"/></g>`,
		"fallback": "uix:step-over",
	});
}

export default Component;
