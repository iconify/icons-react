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

.lke-2pb6e {
  stroke-opacity: 0.4;
  d: path("M1 4L23 4M1 11L23 11");
}

.ue9ujtbdo {
  d: path("M1 18L7 18M9 18L15 18M20 15L20 21M17 18L23 18");
}
</style><g class="gp_8x1bzb"><path class="lke-2pb6e"/><path class="ue9ujtbdo"/></g>`,
		"fallback": "keyline-icons:list-plus-sharp-duotone",
	});
}

export default Component;
