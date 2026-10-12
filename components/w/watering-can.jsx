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
		"content": `<style>.dadz5xb2y {
  width: 10px;
  height: 11.75px;
  x: 3.5px;
  y: 9.5px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vgm7onbsh {
  d: path("M6 9.5v-2a2.75 2.75 0 0 1 2.75-2.75h.5A2.75 2.75 0 0 1 12 7.5v2m1.5 8.5l5.75-8.25M17.5 8.5L21 11M3.5 13h10");
}
</style><g class="hntgybcog"><rect class="dadz5xb2y"/><path class="vgm7onbsh"/></g>`,
		"fallback": "iconoven:watering-can",
	});
}

export default Component;
