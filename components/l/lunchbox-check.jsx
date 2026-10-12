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

.s4cr7mb6v {
  d: path("M8.25 8.75v-2.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v2.5M2.75 13h18.5M12 13v2.75");
}

.tl0x8xoaa {
  width: 18.5px;
  height: 12.5px;
  x: 2.75px;
  y: 8.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="tl0x8xoaa"/><path class="s4cr7mb6v"/></g>`,
		"fallback": "iconoven:lunchbox-check",
	});
}

export default Component;
