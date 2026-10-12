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

.ozabfsbxh {
  width: 13px;
  height: 12px;
  x: 2.75px;
  y: 8.25px;
  rx: 2.5px;
}

.xkfu__b1g {
  d: path("M3.5 11.75H15m-7.5-3.5v-2a2.5 2.5 0 0 1 2.5-2.5h8.75a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-3");
}
</style><g class="hntgybcog"><rect class="ozabfsbxh"/><path class="xkfu__b1g"/></g>`,
		"fallback": "iconoven:restore-window",
	});
}

export default Component;
