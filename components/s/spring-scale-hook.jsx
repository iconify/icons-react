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
		"content": `<style>.e48qm2udo {
  d: path("M12 5.75v1.5l4 1.5l-8 2.5l8 2.5l-4 1.5v3.25a2.25 2.25 0 0 1-4.5 0v-1");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tr40ijznr {
  d: path("M10.25 4a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="tr40ijznr"/><path class="e48qm2udo"/></g>`,
		"fallback": "uix:spring-scale-hook",
	});
}

export default Component;
