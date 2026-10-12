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
		"content": `<style>.a30jequir {
  d: path("M9.5 7v10m5-10v10M2.75 10h2.5m13.5 4h2.5");
}

.btp_l8qzh {
  width: 13.5px;
  height: 10px;
  x: 5.25px;
  y: 7px;
  rx: 5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="btp_l8qzh"/><path class="a30jequir"/></g>`,
		"fallback": "iconoven:muffler",
	});
}

export default Component;
