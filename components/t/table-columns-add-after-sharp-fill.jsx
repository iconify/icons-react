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

.tmoc49buu {
  d: path("M20 6L20 3L2 3L2 21L20 21L20 18M11 3L11 21M19 8L19 16M15 12L23 12");
}

.yom8s_gar {
  fill: currentColor;
  d: path("M11 3L11 21L2 21L2 3L11 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="yom8s_gar"/><path class="tmoc49buu"/></g>`,
		"fallback": "keyline-icons:table-columns-add-after-sharp-fill",
	});
}

export default Component;
