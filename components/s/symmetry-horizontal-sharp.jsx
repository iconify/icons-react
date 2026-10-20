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
		"content": `<style>.oyj2b5bbp {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 5L17 5L22 19L2 19ZM12 1L12 23");
}
</style><path class="oyj2b5bbp"/>`,
		"fallback": "keyline-icons:symmetry-horizontal-sharp",
	});
}

export default Component;
