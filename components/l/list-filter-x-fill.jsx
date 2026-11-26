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
		"content": `<style>.sepesob6x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 7H14M6 13H18M10 19H14M18 5L22 9M22 5L18 9");
}
</style><path class="sepesob6x"/>`,
		"fallback": "keyline-icons:list-filter-x-fill",
	});
}

export default Component;
