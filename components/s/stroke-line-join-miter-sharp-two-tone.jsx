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

.qwkwe-b6h {
  stroke-opacity: 0.4;
  d: path("M11 22L11 11L22 11");
}

.wtedw3jav {
  d: path("M3 22L3 3L22 3");
}
</style><g class="gp_8x1bzb"><path class="qwkwe-b6h"/><path class="wtedw3jav"/></g>`,
		"fallback": "keyline-icons:stroke-line-join-miter-sharp-two-tone",
	});
}

export default Component;
