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
		"content": `<style>.at9zyzb4y {
  width: 11.5px;
  height: 12.5px;
  x: 5.75px;
  y: 5.75px;
  rx: 3px;
}

.berr5rype {
  d: path("M8.5 5.75v-3h6v3m-6 12.5v3h6v-3m5.25-7.75v3M8 12h1.75L11 9.75l1.75 4.5L14 12h1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="at9zyzb4y"/><path class="berr5rype"/></g>`,
		"fallback": "iconoven:smartwatch",
	});
}

export default Component;
