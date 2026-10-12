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

.huy9lcbbo {
  d: path("M5 3.25h14a2.25 2.25 0 0 1 2.25 2.25v5A2.25 2.25 0 0 1 19 12.75h-4.6l-1.6 2.3a.95.95 0 0 1-1.6 0l-1.6-2.3H5a2.25 2.25 0 0 1-2.25-2.25v-5A2.25 2.25 0 0 1 5 3.25M7.25 8h9.5");
}

.updg_djzo {
  width: 6px;
  height: 2.5px;
  x: 9px;
  y: 18px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="huy9lcbbo"/><rect class="updg_djzo"/></g>`,
		"fallback": "iconoven:tooltip-box",
	});
}

export default Component;
