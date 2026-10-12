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
		"content": `<style>.dr55lmhxh {
  d: path("M7.5 13.75h6.25A1.75 1.75 0 0 0 15.5 12v-1.25m-4.25-3.5h8.5L18.5 10a1 1 0 0 1-.9.75h-4.2a1 1 0 0 1-.9-.75Zm1.75-3l-.5-1.5m5.5 1.5l.5-1.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.twnexqx2z {
  width: 3.5px;
  height: 10px;
  x: 4px;
  y: 8.75px;
  rx: 1.75px;
}
</style><g class="hntgybcog"><rect class="twnexqx2z"/><path class="dr55lmhxh"/></g>`,
		"fallback": "iconoven:wall-sconce",
	});
}

export default Component;
