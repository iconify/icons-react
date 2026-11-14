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
		"content": `<style>.h09_a8zvf {
  d: path("M12.75 4.25h6.5A1.75 1.75 0 0 1 21 6v1a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 11 7V6a1.75 1.75 0 0 1 1.75-1.75m0 11h6.5A1.75 1.75 0 0 1 21 17v1a1.75 1.75 0 0 1-1.75 1.75h-6.5A1.75 1.75 0 0 1 11 18v-1a1.75 1.75 0 0 1 1.75-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.maw7r-3ly {
  d: path("M6 2.5v19");
}

.w-v74zy1k {
  fill: currentColor;
  d: path("M4 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 11a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="maw7r-3ly"/><path class="w-v74zy1k"/><path class="h09_a8zvf"/></g>`,
		"fallback": "uix:timeline-vertical",
	});
}

export default Component;
