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
		"content": `<style>.g216uyeia {
  d: path("m11.5 13l8.75-7M9.5 11.5l3.25-8.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.opyybkahz {
  cx: 8.5px;
  cy: 15.5px;
  r: 5.75px;
}

.ps04m9qoo {
  d: path("M5 11.75c2.5 1.25 4.25 4 4.25 8.25m-6-3.75c2.75 0 5 1.25 6.5 3.5");
}
</style><g class="hntgybcog"><path class="g216uyeia"/><circle class="opyybkahz"/><path class="ps04m9qoo"/></g>`,
		"fallback": "iconoven:knitting-needles",
	});
}

export default Component;
