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
		"content": `<style>.f16t4lege {
  fill: currentColor;
  d: path("M23 12L23 17C23 17.5523 22.5523 18 22 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2L13 2L13 12L23 12Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.mpx9zobgv {
  d: path("M12 17L12 21M7 21L17 21M22 6C22 7.6569 20.6569 9 19 9C17.3431 9 16 7.6569 16 6C16 4.3431 17.3431 3 19 3C20.6569 3 22 4.3431 22 6Z");
}
</style><g class="gp_8x1bzb"><path class="f16t4lege"/><path class="mpx9zobgv"/></g>`,
		"fallback": "keyline-icons:monitor-2-dot-sharp-fill",
	});
}

export default Component;
