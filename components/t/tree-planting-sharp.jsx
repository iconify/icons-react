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
		"content": `<style>.an9l3ju_g {
  cx: 9.5px;
  cy: 8px;
  r: 5.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zwmeo2bod {
  d: path("M9.5 13.25v5m-6.5 3c1-2.25 3.5-3 6.5-3s5.5.75 6.5 3Zm15.5-18V13m-1.75 0h3.5v4.5h-3.5v-1.75Z");
}
</style><g class="x2cwu0gfd"><circle class="an9l3ju_g"/><path class="zwmeo2bod"/></g>`,
		"fallback": "iconoven:tree-planting-sharp",
	});
}

export default Component;
