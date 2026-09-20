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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s_9dtpvxy {
  d: path("M8 15.5h8v5H8Z");
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}

.zl2kh1bxb {
  d: path("M10 15.5v-3h4v3");
}
</style><g class="hntgybcog"><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="s_9dtpvxy"/><path class="zl2kh1bxb"/></g>`,
		"fallback": "iconmind:travel-cover-outline-thin",
	});
}

export default Component;
