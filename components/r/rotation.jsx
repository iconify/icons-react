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
		"content": `<style>.e-a7jvbtf {
  d: path("M17.25 11L16 8.5l2.5-1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iktsbgbfm {
  d: path("M12 2.5v19M4 12a8 4 0 0 0 16 0a8 4 0 0 0-4-3.5");
}
</style><g class="hntgybcog"><path class="iktsbgbfm"/><path class="e-a7jvbtf"/></g>`,
		"fallback": "uix:rotation",
	});
}

export default Component;
