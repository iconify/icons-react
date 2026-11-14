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

.o-7qswbop {
  d: path("M6 16.5q.5-6 6-5.5m3-1.75h.01M14.5 18a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.ppt24jbbu {
  d: path("M11.868 19.456L9 18.5l-6 2v-15l6-2l6 2l6-2v8.926");
}
</style><g class="hntgybcog"><path class="ppt24jbbu"/><path class="o-7qswbop"/></g>`,
		"fallback": "uix:robot-vacuum-map",
	});
}

export default Component;
