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
		"content": `<style>.g_b39sbik {
  d: path("M5.54 13.58a8.5 6.25 0 1 1 3.37 2.08m-3.37-2.08l.833 2.667L4.54 18.08");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4wjsdyuw {
  cx: 4.25px;
  cy: 19.5px;
  r: 1.5px;
}
</style><g class="x2cwu0gfd"><path class="g_b39sbik"/><circle class="y4wjsdyuw"/></g>`,
		"fallback": "iconoven:lasso-sharp",
	});
}

export default Component;
