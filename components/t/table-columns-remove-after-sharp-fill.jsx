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

.tc1x7zbgv {
  d: path("M20 6L20 3L2 3L2 21L20 21L20 18M11 3L11 21M15.7071 8.7071L22.2929 15.2929M22.2929 8.7071L15.7071 15.2929");
}

.yom8s_gar {
  fill: currentColor;
  d: path("M11 3L11 21L2 21L2 3L11 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="yom8s_gar"/><path class="tc1x7zbgv"/></g>`,
		"fallback": "keyline-icons:table-columns-remove-after-sharp-fill",
	});
}

export default Component;
