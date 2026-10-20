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

.w1fv1js-z {
  d: path("M15.7071 2.7071L22.2929 9.2929M22.2929 2.7071L15.7071 9.2929");
}

.yf8txxbin {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11 18L2 18C1.4477 18 1 17.5523 1 17L1 3C1 2.4477 1.4477 2 2 2L13 2L13 12L23 12L23 17C23 17.5523 22.5523 18 22 18L13 18L13 20L17 20L17 22L7 22L7 20L11 20L11 18Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="yf8txxbin"/><path class="w1fv1js-z"/></g>`,
		"fallback": "keyline-icons:monitor-2-x-sharp-duotone",
	});
}

export default Component;
