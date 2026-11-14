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

.krauzq_cj {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3");
}

.t27nvufkx {
  d: path("M8 16V8.5A1.5 1.5 0 0 1 9.5 7h5A1.5 1.5 0 0 1 16 8.5V16M6 16h12");
}
</style><g class="hntgybcog"><path class="krauzq_cj"/><path class="t27nvufkx"/></g>`,
		"fallback": "uix:shower-niche",
	});
}

export default Component;
