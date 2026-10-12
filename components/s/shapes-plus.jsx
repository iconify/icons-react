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

.niln19ngy {
  width: 8px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  rx: 1.5px;
}

.wg69ldbkn {
  d: path("m12.55 3.58l3.9 5.84q.55.83-.45.83H8q-1 0-.45-.83l3.9-5.84q.55-.83 1.1 0");
}

.ygphxfbhc {
  cx: 17.25px;
  cy: 17.25px;
  r: 4px;
}
</style><g class="hntgybcog"><path class="wg69ldbkn"/><rect class="niln19ngy"/><circle class="ygphxfbhc"/></g>`,
		"fallback": "iconoven:shapes-plus",
	});
}

export default Component;
