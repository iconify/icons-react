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

.qe97cg-lx {
  d: path("M3 3v18h18");
}

.sfefbpbuh {
  d: path("m5 15 5 -5 4 4h5");
}
</style><g class="hntgybcog"><path class="qe97cg-lx"/><path class="sfefbpbuh"/></g>`,
		"fallback": "iconmind:novelty-effect-outline-thin",
	});
}

export default Component;
