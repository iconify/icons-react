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
		"content": `<style>.fi345qldm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M3 2L21 2C21.5523 2 22 2.4477 22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2ZM3 3L3 9L21 9L21 3Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.kicw5bc3n {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9M8.7071 16.2929L12 13L15.2929 16.2929");
}
</style><g class="gp_8x1bzb"><path class="fi345qldm"/><path class="kicw5bc3n"/></g>`,
		"fallback": "keyline-icons:panel-top-close-sharp-two-tone",
	});
}

export default Component;
