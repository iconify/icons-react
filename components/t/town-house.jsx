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
		"content": `<style>.d3oqm-bjd {
  d: path("M4.75 5.5h14.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pnkvqpbga {
  d: path("M9 8.5v2.25m6-2.25v2.25M9 13v2.25m3.75 6V16.5h2.5v4.75");
}

.q4e8txbps {
  width: 12px;
  height: 15.75px;
  x: 6px;
  y: 5.5px;
  rx: 0.5px;
}
</style><g class="hntgybcog"><path class="d3oqm-bjd"/><rect class="q4e8txbps"/><path class="pnkvqpbga"/></g>`,
		"fallback": "iconoven:town-house",
	});
}

export default Component;
