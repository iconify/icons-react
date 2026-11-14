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

.pj0z00bom {
  d: path("M15.5 6.5h6v6");
}

.qn982mbve {
  d: path("M2.5 17.5L9 11l4 4l8.5-8.5");
}
</style><g class="hntgybcog"><path class="qn982mbve"/><path class="pj0z00bom"/></g>`,
		"fallback": "uix:trending",
	});
}

export default Component;
