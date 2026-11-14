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
		"content": `<style>.a74n1qbdr {
  d: path("M2.5 8H5m-2.5 4H5m-2.5 4H5m14-8h2.5M19 12h2.5M19 16h2.5");
}

.cxas06zas {
  d: path("M7.625 4h8.75A2.625 2.625 0 0 1 19 6.625v10.75A2.625 2.625 0 0 1 16.375 20h-8.75A2.625 2.625 0 0 1 5 17.375V6.625A2.625 2.625 0 0 1 7.625 4M12 4v16M5 9.25h14m-14 5.5h14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vu9d00v-f {
  fill: currentColor;
  d: path("M14.25 12a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="cxas06zas"/><path class="vu9d00v-f"/><path class="a74n1qbdr"/></g>`,
		"fallback": "uix:memory-address",
	});
}

export default Component;
