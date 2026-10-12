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
		"content": `<style>.fq13zebzr {
  width: 18.5px;
  height: 3.5px;
  x: 2.75px;
  y: 17.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p35xmhbfb {
  d: path("M2.75 17.75V7.25a1 1 0 0 1 1-1H7.5l1.5 3c2.75 1 7 1.5 9.5 2.75c1.75.85 2.75 2.25 2.75 4v1.75Zm6.5-5.25L10.5 11m1.5 2.25l1.25-1.5");
}
</style><g class="hntgybcog"><path class="p35xmhbfb"/><rect class="fq13zebzr"/></g>`,
		"fallback": "iconoven:sneaker-plus",
	});
}

export default Component;
