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
		"content": `<style>.b6mkamhuw {
  d: path("M5.5 12.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m-3 8h19");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yn69knblx {
  d: path("M11.25 11.5a1.5 1.5 0 1 1-1.5-1.5m0 1.5h.01m5.99 0a1.5 1.5 0 1 1-1.5-1.5m0 1.5h.01m-3.76 4h3");
}
</style><g class="hntgybcog"><path class="b6mkamhuw"/><path class="yn69knblx"/></g>`,
		"fallback": "uix:unconscious-person",
	});
}

export default Component;
