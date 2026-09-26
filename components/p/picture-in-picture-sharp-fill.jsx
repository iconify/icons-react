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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hfu1j8bzf {
  d: path("M22 9L22 4L2 4L2 20L9 20");
}

.pjw3yhbkd {
  fill: currentColor;
  d: path("M12 11L22 11C22.5523 11 23 11.4477 23 12L23 20C23 20.5523 22.5523 21 22 21L12 21C11.4477 21 11 20.5523 11 20L11 12C11 11.4477 11.4477 11 12 11Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="pjw3yhbkd"/><path class="hfu1j8bzf"/></g>`,
		"fallback": "keyline-icons:picture-in-picture-sharp-fill",
	});
}

export default Component;
