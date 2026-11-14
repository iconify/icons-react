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
		"content": `<style>.bjgu-ac-j {
  d: path("M16.5 3.5q0 4 4 4q-4 0-4 4q0-4-4-4q4 0 4-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xuzysxbsg {
  d: path("M20 14.75A8.5 8.5 0 1 1 9.25 4A9 9 0 0 0 20 14.75");
}
</style><g class="hntgybcog"><path class="xuzysxbsg"/><path class="bjgu-ac-j"/></g>`,
		"fallback": "uix:moon-star",
	});
}

export default Component;
