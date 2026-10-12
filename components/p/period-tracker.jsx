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

.j935he2op {
  d: path("M12.5 8.25c1.6 2.1 3 3.6 3 5.25a3 3 0 0 1-6 0c0-1.65 1.4-3.15 3-5.25");
}

.pwt28iams {
  d: path("M17.98 7.02a7.75 7.75 0 1 1-5.48-2.27M10.75 3l1.75 1.75l-1.75 1.75");
}
</style><g class="hntgybcog"><path class="pwt28iams"/><path class="j935he2op"/></g>`,
		"fallback": "iconoven:period-tracker",
	});
}

export default Component;
