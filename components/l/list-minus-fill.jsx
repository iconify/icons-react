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
		"content": `<style>.kdc9n4l0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 6H22M2 12H22M2 18H6M10 18H14M18 18H22");
}
</style><path class="kdc9n4l0q"/>`,
		"fallback": "keyline-icons:list-minus-fill",
	});
}

export default Component;
