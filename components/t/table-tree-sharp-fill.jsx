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

.y4d-7n49k {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9M7 9L7 17L11 17M7 13L11 13M13 13L18 13M13 17L18 17");
}

.zyu_ccbvv {
  fill: currentColor;
  d: path("M3 3L21 3L21 9L3 9L3 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="zyu_ccbvv"/><path class="y4d-7n49k"/></g>`,
		"fallback": "keyline-icons:table-tree-sharp-fill",
	});
}

export default Component;
