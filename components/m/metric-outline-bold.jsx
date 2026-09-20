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
		"content": `<style>.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.u4c9tcc0l {
  d: path("m12 16 5 -5");
}
</style><g class="s0phu2bbs"><path class="ng35sb6yg"/><path class="u4c9tcc0l"/></g>`,
		"fallback": "iconmind:metric-outline-bold",
	});
}

export default Component;
