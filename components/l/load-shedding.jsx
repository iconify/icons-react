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
		"content": `<style>.ebdii9bub {
  d: path("m11.5 3l-5 8h6L8 19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vyhli1bqq {
  d: path("M17.25 15.25v2l1.5 1");
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="hntgybcog"><path class="ebdii9bub"/><circle class="ygphxfbhc"/><path class="vyhli1bqq"/></g>`,
		"fallback": "iconoven:load-shedding",
	});
}

export default Component;
