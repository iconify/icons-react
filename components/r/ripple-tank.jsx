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

.i3dfkobbj {
  d: path("M3 6v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6");
}

.n7mogxbiy {
  d: path("M6 14q1.5-2 3 0t3 0t3 0t3 0M12 3S9.75 5.75 9.75 7.25a2.25 2.25 0 0 0 4.5 0C14.25 5.75 12 3 12 3");
}
</style><g class="hntgybcog"><path class="i3dfkobbj"/><path class="n7mogxbiy"/></g>`,
		"fallback": "uix:ripple-tank",
	});
}

export default Component;
