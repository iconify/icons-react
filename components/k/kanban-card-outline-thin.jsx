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
		"content": `<style>.f8gsx7b5s {
  d: path("M6 8h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nzpsuduik {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.o5ex3bb1u {
  d: path("M16 17a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ydinxmf-y {
  d: path("M6 12h8");
}
</style><g class="hntgybcog"><path class="nzpsuduik"/><path class="f8gsx7b5s"/><path class="ydinxmf-y"/><path class="o5ex3bb1u"/></g>`,
		"fallback": "iconmind:kanban-card-outline-thin",
	});
}

export default Component;
