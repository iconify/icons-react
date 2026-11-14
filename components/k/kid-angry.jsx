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
		"content": `<style>.asiycii1p {
  d: path("M8.5 17.5q3.5-3.5 7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.urm0r_wbz {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m4.75-4.75l3 1.75m6.5-1.75l-3 1.75M9 12h.01M15 12h.01");
}
</style><g class="hntgybcog"><path class="urm0r_wbz"/><path class="asiycii1p"/></g>`,
		"fallback": "uix:kid-angry",
	});
}

export default Component;
