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
		"content": `<style>.edl-ivdhk {
  d: path("M7.75 10.25a3.25 3.25 0 1 0 .95-2.3m-2.45.8l1.5 1.5l1.5-1.5");
}

.eh371fbct {
  d: path("M6.75 21.25v-5.1a7.25 7.25 0 1 1 11.5-5.9l1.75 3.1a.6.6 0 0 1-.52.9h-1.23v2.5a2 2 0 0 1-2 2H14.5v2.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eh371fbct"/><path class="edl-ivdhk"/></g>`,
		"fallback": "iconoven:memory-recall",
	});
}

export default Component;
