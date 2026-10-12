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
		"content": `<style>.dnp2npbye {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.try0szbvy {
  d: path("M8.5 10.75a3.5 3.5 0 0 1 7 0m-7.75 0h8.5m-8 4h7.5m-6.25 3h5");
}
</style><g class="hntgybcog"><rect class="dnp2npbye"/><path class="try0szbvy"/></g>`,
		"fallback": "iconoven:menu-card",
	});
}

export default Component;
