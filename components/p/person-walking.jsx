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
		"content": `<style>.e9xqa_ico {
  cx: 14px;
  cy: 4.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4uzkfz8s {
  d: path("m13.5 8.5l-1.5 6l-2.5 6.75M12 14.5l2.75 2.75v4M13.25 9.5l3 2.75M13 10l-3 2M3.75 9.5h3m-4 3.5h3.5m-2.5 3.5h2.5");
}
</style><g class="hntgybcog"><circle class="e9xqa_ico"/><path class="j4uzkfz8s"/></g>`,
		"fallback": "iconoven:person-walking",
	});
}

export default Component;
