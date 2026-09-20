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
		"content": `<style>.a3b7rvb1p {
  d: path("M5 12a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v7a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ltriwmbuu {
  d: path("M8 10a4 4 0 0 1 8 0");
}

.y1lnycw3l {
  d: path("M11 15a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="a3b7rvb1p"/><path class="ltriwmbuu"/><path class="y1lnycw3l"/></g>`,
		"fallback": "iconmind:lock-outline-thin",
	});
}

export default Component;
