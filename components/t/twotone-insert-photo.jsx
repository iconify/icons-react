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
		"content": `<style>.o8t0p-bds {
  fill: currentColor;
  d: path("M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m16 14H5V5h14zm-4.86-7.14l-3 3.86L9 13.14L6 17h12z");
}

.x9ph6yocg {
  fill: currentColor;
  d: path("M5 19h14V5H5zm4-5.86l2.14 2.58l3-3.87L18 17H6z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="x9ph6yocg"/><path class="o8t0p-bds"/>`,
		"fallback": "ic:twotone-insert-photo",
	});
}

export default Component;
