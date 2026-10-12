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
		"content": `<style>.adcsmfg4s {
  cx: 12px;
  cy: 11.75px;
  r: 2px;
}

.g5aa34bpo {
  d: path("M10.25 13.25Q7 16 3.75 21.25H8q1.25-4.25 3.5-7.5Zm3.5 0q3.25 2.75 6.5 8H16q-1.25-4.25-3.5-7.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ipeesrb1t {
  d: path("M9.75 10.5L12 2.75l2.25 7.75");
}
</style><g class="hntgybcog"><path class="ipeesrb1t"/><circle class="adcsmfg4s"/><path class="g5aa34bpo"/></g>`,
		"fallback": "iconoven:pliers-nose",
	});
}

export default Component;
