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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ist54rbfb {
  stroke-linejoin: round;
  d: path("M5.99954 7.8584L1.85791 12L5.99954 16.1416");
}

.ti-w8z23v {
  d: path("M22.1422 12.0001L1.85791 12");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.u51xaccpr {
  stroke-linejoin: round;
  d: path("M18.0005 7.8584L22.1422 12L18.0005 16.1416");
}
</style><g class="ipq1z-bjh"><path class="ti-w8z23v"/><path class="ist54rbfb"/><path class="u51xaccpr"/></g>`,
		"fallback": "solar:move-horizontal-line-duotone",
	});
}

export default Component;
