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
		"content": `<style>.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydyxs3b_d {
  d: path("m6.5 8.75l4.1 3.1l1.4.988l1.4-.988l4.1-3.1");
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="ydyxs3b_d"/></g>`,
		"fallback": "iconoven:mail-eye-sharp",
	});
}

export default Component;
