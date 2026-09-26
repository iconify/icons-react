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
		"content": `<style>.y83n522hj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 19L2 19L2 10L22 10L22 19L18 19M6 10L6 2L14 2L18 6L18 10M6 15L18 15L18 22L6 22L6 15Z");
}
</style><path class="y83n522hj"/>`,
		"fallback": "keyline-icons:printer-sharp",
	});
}

export default Component;
