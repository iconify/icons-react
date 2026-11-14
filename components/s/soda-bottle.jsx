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
		"content": `<style>.h648v5bbd {
  d: path("M11.5 13.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3sio_xld {
  d: path("M10 6v2c0 1.5-3 2.5-3 5v7a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 20v-7c0-2.5-3-3.5-3-5V6M9.5 2.5h5V6h-5Zm1.5 15h.01");
}
</style><g class="ulnmmdpxh"><path class="z3sio_xld"/><path class="h648v5bbd"/></g>`,
		"fallback": "uix-sharp:soda-bottle",
	});
}

export default Component;
