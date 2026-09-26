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
		"content": `<style>.obw2w46mj {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3L22 3M2 21L15 21M16 3L9 21");
}
</style><path class="obw2w46mj"/>`,
		"fallback": "keyline-icons:italic-sharp-fill",
	});
}

export default Component;
