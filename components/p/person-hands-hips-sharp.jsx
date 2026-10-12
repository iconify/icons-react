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
		"content": `<style>.hhxk24b9g {
  cx: 9.5px;
  cy: 7.25px;
  r: 2px;
}

.t5w7hlb0j {
  d: path("M9.5 12v4.5m-2.25 4.75L9.5 16.5l2.25 4.75M9.5 13L7 16m2.5-3l5-1.5V3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="hhxk24b9g"/><path class="t5w7hlb0j"/></g>`,
		"fallback": "iconoven:person-hands-hips-sharp",
	});
}

export default Component;
