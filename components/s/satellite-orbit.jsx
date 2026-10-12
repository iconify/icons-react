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
		"content": `<style>.aazdi0b7u {
  d: path("m17.17 3.21l2.64 1.43l-1.42 2.64l-2.64-1.43Z");
}

.aqhok2bbj {
  cx: 12px;
  cy: 12px;
  r: 4px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.moekz8btc {
  d: path("M19.02 6.13a9.25 7-30 1 1-2.64-1.45");
}
</style><g class="hntgybcog"><circle class="aqhok2bbj"/><path class="moekz8btc"/><path class="aazdi0b7u"/></g>`,
		"fallback": "iconoven:satellite-orbit",
	});
}

export default Component;
