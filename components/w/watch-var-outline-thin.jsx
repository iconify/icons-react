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

.swzjdoakn {
  d: path("M11 9a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.ts70t37mn {
  d: path("m4 9 5 5h6l5 -5");
}

.wuk2mlziz {
  d: path("M7 19h10");
}

.z3e--kb9y {
  d: path("m4 9 5 -5h6l5 5");
}
</style><g class="hntgybcog"><path class="z3e--kb9y"/><path class="ts70t37mn"/><path class="swzjdoakn"/><path class="wuk2mlziz"/></g>`,
		"fallback": "iconmind:watch-var-outline-thin",
	});
}

export default Component;
