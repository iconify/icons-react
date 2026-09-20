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

.wa8tqsbro {
  d: path("M17.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.y0x-x3b-m {
  d: path("M2 18h19");
}

.yuybrcb9z {
  d: path("M12 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zaji3hbsg {
  d: path("M5.5 8.5 9 12l-3.5 3.5L2 12Z");
}
</style><g class="hntgybcog"><path class="zaji3hbsg"/><path class="yuybrcb9z"/><path class="wa8tqsbro"/><path class="y0x-x3b-m"/></g>`,
		"fallback": "iconmind:queue-priority-outline-thin",
	});
}

export default Component;
