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

.hswv-t1fg {
  d: path("M5.22 10.25L8.25 12l3.03-1.75M8.25 12v3.5");
}

.ucxu3gbut {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2.5px;
}

.v4ak3-bee {
  d: path("M13.25 10h4.5m-4.5 4h3M8.9 8.88l1.73.99q.65.38.65 1.13v2q0 .75-.65 1.13l-1.73.99q-.65.38-1.3 0l-1.73-.99q-.65-.38-.65-1.13v-2q0-.75.65-1.13l1.73-.99q.65-.38 1.3 0");
}
</style><g class="hntgybcog"><rect class="ucxu3gbut"/><path class="v4ak3-bee"/><path class="hswv-t1fg"/></g>`,
		"fallback": "iconoven:model-card",
	});
}

export default Component;
