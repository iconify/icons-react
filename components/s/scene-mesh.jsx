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
		"content": `<style>.c2ii5983h {
  d: path("M4 8h10.5A1.5 1.5 0 0 1 16 9.5V20a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20V9.5A1.5 1.5 0 0 1 4 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xq0ikof0c {
  d: path("M2.5 8L8 2.5h13.5V16L16 21.5M16 8l5.5-5.5M2.5 8L16 21.5");
}
</style><g class="hntgybcog"><path class="c2ii5983h"/><path class="xq0ikof0c"/></g>`,
		"fallback": "uix:scene-mesh",
	});
}

export default Component;
