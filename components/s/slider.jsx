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

.k4otqlbae {
  cx: 14.75px;
  cy: 7px;
  r: 2.5px;
}

.n8i5eh1xw {
  d: path("M3.75 7h8.5m5 0h3M3.75 17h3m5 0h8.5");
}

.qsajm5bmn {
  cx: 9.25px;
  cy: 17px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="n8i5eh1xw"/><circle class="k4otqlbae"/><circle class="qsajm5bmn"/></g>`,
		"fallback": "iconoven:slider",
	});
}

export default Component;
