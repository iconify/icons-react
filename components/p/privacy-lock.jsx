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
		"content": `<style>.b5iy4umwa {
  d: path("M8 10.25V7.5a4 4 0 0 1 8 0v2.75");
}

.cvk--017m {
  cx: 12px;
  cy: 14.25px;
  r: 1.5px;
}

.d7e32ebyd {
  d: path("M9.5 18.5a2.5 2.5 0 0 1 5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k-jom-byp {
  width: 15.5px;
  height: 11px;
  x: 4.25px;
  y: 10.25px;
  rx: 3px;
}
</style><g class="hntgybcog"><path class="b5iy4umwa"/><rect class="k-jom-byp"/><circle class="cvk--017m"/><path class="d7e32ebyd"/></g>`,
		"fallback": "iconoven:privacy-lock",
	});
}

export default Component;
