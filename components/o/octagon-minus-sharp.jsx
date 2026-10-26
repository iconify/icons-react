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

.of52wgbuj {
  d: path("M7 12L17 12");
}

.up15_y9jb {
  d: path("M3 15.6L3 8.4L8.4 3L15.6 3L21 8.4L21 15.6L15.6 21L8.4 21L3 15.6Z");
}
</style><g class="gp_8x1bzb"><path class="up15_y9jb"/><path class="of52wgbuj"/></g>`,
		"fallback": "keyline-icons:octagon-minus-sharp",
	});
}

export default Component;
