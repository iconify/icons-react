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
		"content": `<style>.lfb-j4xcu {
  d: path("M12 4.5V17m-4.12-6.25L12 17l4.12-6.25");
}

.mk7o51bkc {
  d: path("M3.75 17L12 4.5L20.25 17m-17.5 0h18.5v2.5H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mk7o51bkc"/><path class="lfb-j4xcu"/></g>`,
		"fallback": "iconoven:roof-truss-sharp",
	});
}

export default Component;
