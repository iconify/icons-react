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

.j4wwbpboe {
  d: path("m13.552 3.638l4.875 3.575A2.63 2.63 0 0 1 19.5 9.33v9.545a2.625 2.625 0 0 1-2.625 2.625h-9.75A2.625 2.625 0 0 1 4.5 18.875V9.33a2.63 2.63 0 0 1 1.073-2.117l4.875-3.575a2.625 2.625 0 0 1 3.104 0M12 6.75h.01");
}

.tux8kacir {
  d: path("M7.5 11.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m6 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m-3.5.5l4-6.5");
}
</style><g class="hntgybcog"><path class="j4wwbpboe"/><path class="tux8kacir"/></g>`,
		"fallback": "uix:sale-banner",
	});
}

export default Component;
