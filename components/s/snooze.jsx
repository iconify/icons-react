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
		"content": `<style>.ax5-ftkkw {
  d: path("M4.5 13a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0M3 6l3-3m15 3l-3-3M6.5 18.5l-2 2m13-2l2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q8y5eov9f {
  d: path("M9.75 10.5h4.5l-4.5 5h4.5");
}
</style><g class="hntgybcog"><path class="ax5-ftkkw"/><path class="q8y5eov9f"/></g>`,
		"fallback": "uix:snooze",
	});
}

export default Component;
