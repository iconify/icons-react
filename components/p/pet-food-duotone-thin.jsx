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
		"content": `<style>.drftkjb-q {
  d: path("M11 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kg2sgwbge {
  fill: currentColor;
  d: path("M7 7v14h10V7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.qgk9g7b5k {
  fill: currentColor;
  d: path("M11 11a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.v740ayb7w {
  d: path("M7 7v14h10V7Z");
}

.xejjxw8bt {
  d: path("M7 7c0 -3 10 -3 10 0");
}
</style><g class="hntgybcog"><path class="kg2sgwbge"/><path class="qgk9g7b5k"/><path class="v740ayb7w"/><path class="xejjxw8bt"/><path class="drftkjb-q"/></g>`,
		"fallback": "iconmind:pet-food-duotone-thin",
	});
}

export default Component;
