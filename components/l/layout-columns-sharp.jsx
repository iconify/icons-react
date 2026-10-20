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
		"content": `<style>.a96l0dbrs {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L6 5L6 19L2 19ZM10 5L14 5L14 19L10 19ZM18 5L22 5L22 19L18 19Z");
}
</style><path class="a96l0dbrs"/>`,
		"fallback": "keyline-icons:layout-columns-sharp",
	});
}

export default Component;
