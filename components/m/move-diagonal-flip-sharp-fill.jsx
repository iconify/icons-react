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
		"content": `<style>.ufw_3d8lh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.1757 4.1757L19.8243 19.8243M20 13L20 20L13 20M4 11L4 4L11 4");
}
</style><path class="ufw_3d8lh"/>`,
		"fallback": "keyline-icons:move-diagonal-flip-sharp-fill",
	});
}

export default Component;
