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

.ihsthmb_l {
  d: path("m12.332 9.555l1.796 1.197a1.5 1.5 0 0 1 0 2.496l-1.796 1.197A1.5 1.5 0 0 1 10 13.197v-2.394a1.5 1.5 0 0 1 2.332-1.248");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="ihsthmb_l"/></g>`,
		"fallback": "uix:play-circle",
	});
}

export default Component;
