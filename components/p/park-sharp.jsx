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
		"content": `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x33wir85y {
  d: path("M7.25 11.75v9.5m6-8.25h8m-8 3.5h8m-6.75 0v4.75M20 16.5v4.75");
}

.zwg5e_b3m {
  cx: 7.25px;
  cy: 7.25px;
  r: 4.5px;
}
</style><g class="x2cwu0gfd"><circle class="zwg5e_b3m"/><path class="x33wir85y"/></g>`,
		"fallback": "iconoven:park-sharp",
	});
}

export default Component;
