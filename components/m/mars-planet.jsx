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

.l_ykd8b0q {
  d: path("M4.96 6h14.08A9.25 9.25 0 1 1 4.96 6m0 0h14.08A9.25 9.25 0 0 0 4.96 6");
}

.oruds0ork {
  cx: 15.25px;
  cy: 16px;
  r: 1.5px;
}

.pbit6lbsn {
  cx: 9px;
  cy: 12.5px;
  r: 2px;
}
</style><g class="hntgybcog"><path class="l_ykd8b0q"/><circle class="pbit6lbsn"/><circle class="oruds0ork"/></g>`,
		"fallback": "iconoven:mars-planet",
	});
}

export default Component;
