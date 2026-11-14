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
		"content": `<style>.dr16gdb2h {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 3m6 13v4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.imqu5rq4t {
  d: path("M6 7.5L7.5 6v6m9-6za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2M11 7.5h.01m-.01 3h.01");
}
</style><g class="hntgybcog"><path class="dr16gdb2h"/><path class="imqu5rq4t"/></g>`,
		"fallback": "uix:live-score",
	});
}

export default Component;
