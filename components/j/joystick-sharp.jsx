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
		"content": `<style>.bn940l_mc {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 18.4h.01m9.99 0h.01");
}

.nw_26ibjx {
  cx: 12px;
  cy: 6.5px;
  r: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sxqr58bdg {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15.5H21v5.75H3V15.5zm7.5 0V9.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="sxqr58bdg"/><circle class="nw_26ibjx"/><path class="bn940l_mc"/></g>`,
		"fallback": "iconoven:joystick-sharp",
	});
}

export default Component;
