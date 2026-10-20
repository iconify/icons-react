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

.zlb8h44fd {
  d: path("M12 17L12 21M7 21L17 21M15.7071 5.7071L18 8L22.2929 3.7071");
}
</style><g class="gp_8x1bzb"><path class="f16t4lege"/><path class="zlb8h44fd"/></g>`,
		"fallback": "keyline-icons:monitor-2-check-sharp-fill",
	});
}

export default Component;
