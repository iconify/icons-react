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

.j7phtvv5f {
  d: path("M4 19a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.p-74fg5cj {
  d: path("M5 12a7 7 0 0 1 7 7");
}

.vz5_16nyg {
  d: path("M5 6a13 13 0 0 1 13 13");
}
</style><g class="hntgybcog"><path class="j7phtvv5f"/><path class="p-74fg5cj"/><path class="vz5_16nyg"/></g>`,
		"fallback": "iconmind:subscribe-outline-thin",
	});
}

export default Component;
