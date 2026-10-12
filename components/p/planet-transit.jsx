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
		"content": `<style>.f1d-q_w_m {
  d: path("M2.75 17.75h6l1.5 2.25h3.5l1.5-2.25h6");
}

.h2g8fpd8t {
  cx: 14px;
  cy: 9.5px;
  r: 1.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ua36z6mem {
  cx: 12px;
  cy: 9px;
  r: 6.25px;
}
</style><g class="hntgybcog"><circle class="ua36z6mem"/><circle class="h2g8fpd8t"/><path class="f1d-q_w_m"/></g>`,
		"fallback": "iconoven:planet-transit",
	});
}

export default Component;
