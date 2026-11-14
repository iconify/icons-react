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

.ua3lvbbqx {
  d: path("M3.5 20.5c0-11.5 5.5-17 17-17c0 11.5-5.5 17-17 17");
}

.wax97wb7y {
  d: path("M12 15s-2.75-1.75-2.75-3.75c0-1 .75-1.75 1.75-1.75c.5 0 .75.25 1 .75c.25-.5.5-.75 1-.75c1 0 1.75.75 1.75 1.75c0 2-2.75 3.75-2.75 3.75");
}
</style><g class="hntgybcog"><path class="ua3lvbbqx"/><path class="wax97wb7y"/></g>`,
		"fallback": "uix:plant-health",
	});
}

export default Component;
