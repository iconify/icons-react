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

.n81udiknj {
  cx: 19px;
  cy: 4.5px;
  r: 1.5px;
}

.r0wnaopfd {
  d: path("M10.5 4.5a5 5 0 0 0-5 5v3.25l-1.5 3h13l-1.5-3V9.5a5 5 0 0 0-5-5m-2 14.25a2 2 0 0 0 4 0");
}
</style><g class="hntgybcog"><path class="r0wnaopfd"/><circle class="n81udiknj"/></g>`,
		"fallback": "iconoven:reminder-bell",
	});
}

export default Component;
