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
		"content": `<style>.c6yqvq36o {
  d: path("M5 11c2 -3 4 -1 7 -3s5 1 7 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zc40vp7yl {
  d: path("M4 11c0 5 3 8 8 8s8 -3 8 -8Z");
}
</style><g class="hntgybcog"><path class="zc40vp7yl"/><path class="c6yqvq36o"/></g>`,
		"fallback": "iconmind:taco-outline-thin",
	});
}

export default Component;
