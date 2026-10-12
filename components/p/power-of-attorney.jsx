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
		"content": `<style>.csyj_zbpi {
  d: path("M6 7h4.5M6 10.25h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3k6s3bra {
  width: 10.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 2px;
}

.mx05vpbqt {
  d: path("M16.25 21.25a2.5 2.5 0 0 1 5 0Z");
}

.ugj79i4_e {
  cx: 18.75px;
  cy: 15px;
  r: 1.75px;
}
</style><g class="hntgybcog"><rect class="j3k6s3bra"/><path class="csyj_zbpi"/><circle class="ugj79i4_e"/><path class="mx05vpbqt"/></g>`,
		"fallback": "iconoven:power-of-attorney",
	});
}

export default Component;
