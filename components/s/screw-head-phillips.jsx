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
		"content": `<style>.amomzhjge {
  d: path("M12 6.5zA1.5 1.5 0 0 1 13.5 8v1a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 0-1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5v-1A1.5 1.5 0 0 0 9 13.5H8A1.5 1.5 0 0 1 6.5 12A1.5 1.5 0 0 1 8 10.5h1A1.5 1.5 0 0 0 10.5 9V8A1.5 1.5 0 0 1 12 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j7qjn6psg {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0");
}
</style><g class="hntgybcog"><path class="j7qjn6psg"/><path class="amomzhjge"/></g>`,
		"fallback": "uix:screw-head-phillips",
	});
}

export default Component;
