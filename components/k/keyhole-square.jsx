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
		"content": `<style>.dbgvcxwad {
  cx: 12px;
  cy: 12px;
  r: 9.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k4y57j35l {
  d: path("M12 6.75a2.5 2.5 0 0 0-1.3 4.65l-.95 5.1h4.5l-.95-5.1A2.5 2.5 0 0 0 12 6.75");
}
</style><g class="hntgybcog"><circle class="dbgvcxwad"/><path class="k4y57j35l"/></g>`,
		"fallback": "iconoven:keyhole-square",
	});
}

export default Component;
