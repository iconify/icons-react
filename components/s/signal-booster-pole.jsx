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

.nrgiwnquu {
  fill: currentColor;
  d: path("M10.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}

.y5z5ctpzp {
  d: path("M15.447 6.107a4.5 4.5 0 0 1 0 5.786m2.298-7.714a7.5 7.5 0 0 1 0 9.642m-9.192-1.928a4.5 4.5 0 0 1 0-5.786m-2.298 7.714a7.5 7.5 0 0 1 0-9.642");
}

.zcucs5bud {
  d: path("M8 21.5h8m-4 0V9");
}
</style><g class="hntgybcog"><path class="zcucs5bud"/><path class="nrgiwnquu"/><path class="y5z5ctpzp"/></g>`,
		"fallback": "uix:signal-booster-pole",
	});
}

export default Component;
