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

.j5mzj7b8x {
  d: path("M2.5 8a5 5 0 1 0 10 0a5 5 0 1 0-10 0m10 0h9m-3 0v3m3-3v3");
}

.tpnm0ebyi {
  d: path("M5.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M16 15.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-1.75 6c0-1.75 1.75-3 3.75-3s3.75 1.25 3.75 3");
}
</style><g class="hntgybcog"><path class="j5mzj7b8x"/><path class="tpnm0ebyi"/></g>`,
		"fallback": "uix:key-holder-badge",
	});
}

export default Component;
