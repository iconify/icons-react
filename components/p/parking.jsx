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

.kxq9ww4ym {
  width: 16.5px;
  height: 16.5px;
  x: 3.75px;
  y: 3.75px;
  rx: 2.5px;
}

.nhti-ubql {
  d: path("M9.75 16.75v-9.5h3.5a2.75 2.75 0 0 1 0 5.5h-3.5");
}
</style><g class="hntgybcog"><rect class="kxq9ww4ym"/><path class="nhti-ubql"/></g>`,
		"fallback": "iconoven:parking",
	});
}

export default Component;
