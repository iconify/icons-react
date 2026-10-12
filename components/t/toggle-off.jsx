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

.hrhyb1bxi {
  width: 18.5px;
  height: 11px;
  x: 2.75px;
  y: 6.5px;
  rx: 5.5px;
}

.qhvrk_ymv {
  cx: 8.25px;
  cy: 12px;
  r: 3px;
}
</style><g class="hntgybcog"><rect class="hrhyb1bxi"/><circle class="qhvrk_ymv"/></g>`,
		"fallback": "iconoven:toggle-off",
	});
}

export default Component;
