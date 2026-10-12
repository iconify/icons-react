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

.wne2a3nxa {
  d: path("m12.67 9.39l2.91 8.22q.67 1.89-1.33 1.89h-4.5q-2 0-1.33-1.89l2.91-8.22q.67-1.89 1.34 0");
}

.y4cli5bic {
  cx: 6.66px;
  cy: 15.07px;
  r: 2.5px;
}

.z2ws99b2y {
  d: path("M5.41 12.9a7.01 7.01 0 1 1 13.18 0");
}

.z885y3b8w {
  cx: 17.34px;
  cy: 15.07px;
  r: 2.5px;
}
</style><g class="hntgybcog"><path class="wne2a3nxa"/><circle class="y4cli5bic"/><circle class="z885y3b8w"/><path class="z2ws99b2y"/></g>`,
		"fallback": "iconoven:respirator",
	});
}

export default Component;
