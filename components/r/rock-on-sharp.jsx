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
		"content": `<style>.erccm8p9i {
  d: path("M8.25 3H9.5v9h5.25V4.5h2.5V21H7V3z");
}

.lb4n679ke {
  d: path("M9.25 14.25h6.5v2.5h-6.5z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="erccm8p9i"/><path class="lb4n679ke"/></g>`,
		"fallback": "iconoven:rock-on-sharp",
	});
}

export default Component;
