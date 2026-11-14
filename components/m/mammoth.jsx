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

.pbne3tmmt {
  d: path("M8.5 13.5c0 4-3 5-5.25 3.25M11.5 15v5.5m7-5.5v5.5M8 8h.01");
}

.t8hzhxavj {
  d: path("M4.5 9c-1.75 3-1.75 7.5-.5 10c.75 1.5 2.5 1 2.25-.25");
}

.ux0y3l2ij {
  d: path("M7 14.5c-3-2-3.5-10.5 3-11c6-.5 11 3 11 8.5v3Z");
}
</style><g class="hntgybcog"><path class="ux0y3l2ij"/><path class="t8hzhxavj"/><path class="pbne3tmmt"/></g>`,
		"fallback": "uix:mammoth",
	});
}

export default Component;
