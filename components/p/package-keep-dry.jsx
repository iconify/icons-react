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

.q_mladbtv {
  d: path("M6.5 12a5.5 5.5 0 0 1 11 0Zm5.5 0v4.25a1.25 1.25 0 0 1-2.5 0");
}

.ru6wkbb1e {
  width: 18.5px;
  height: 17.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="ru6wkbb1e"/><path class="q_mladbtv"/></g>`,
		"fallback": "iconoven:package-keep-dry",
	});
}

export default Component;
