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
		"content": `<style>.dtl23o_xq {
  cx: 12px;
  cy: 6px;
  r: 4px;
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.srendccfk {
  cx: 12px;
  cy: 17px;
  rx: 7px;
  ry: 4px;
}
</style><g class="ipq1z-bjh"><circle class="dtl23o_xq"/><ellipse class="srendccfk"/></g>`,
		"fallback": "solar:user-rounded-linear",
	});
}

export default Component;
