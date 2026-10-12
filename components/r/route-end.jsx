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
		"content": `<style>.aldfehmne {
  cx: 4.75px;
  cy: 19px;
  r: 2px;
}

.fc9xx45ab {
  d: path("M6.75 19h5c2.5 0 4.25-1.75 4.25-4.25v-7m.68-4.68l3.89 1.86q.68.32 0 .64l-3.89 1.86Q16 7.75 16 7V3.5q0-.75.68-.43");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><circle class="aldfehmne"/><path class="fc9xx45ab"/></g>`,
		"fallback": "iconoven:route-end",
	});
}

export default Component;
