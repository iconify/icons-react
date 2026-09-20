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

.ivqg9reic {
  d: path("M11 17.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.jgpu15buw {
  d: path("M3 4.5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v15a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.od9oaab8v {
  d: path("M12 10v4.5");
}

.ozi-k-boi {
  d: path("M3 7h18");
}
</style><g class="hntgybcog"><path class="jgpu15buw"/><path class="ozi-k-boi"/><path class="od9oaab8v"/><path class="ivqg9reic"/></g>`,
		"fallback": "iconmind:page-alert-outline-thin",
	});
}

export default Component;
