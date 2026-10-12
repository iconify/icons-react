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
		"content": `<style>.bjf2fuknp {
  d: path("M9 5V2.75M15 5V2.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nrlkvmbnw {
  d: path("M5.75 8.75h12.5m-6.25 3c1.5 1.4 2.25 2.5 2.25 3.6a2.25 2.25 0 0 1-4.5 0c0-1.1.75-2.2 2.25-3.6");
}

.qx8fvbbwf {
  width: 12.5px;
  height: 16.25px;
  x: 5.75px;
  y: 5px;
  rx: 3px;
}
</style><g class="hntgybcog"><path class="bjf2fuknp"/><rect class="qx8fvbbwf"/><path class="nrlkvmbnw"/></g>`,
		"fallback": "iconoven:water-heater",
	});
}

export default Component;
