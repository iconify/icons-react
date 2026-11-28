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
		"content": `<style>.zd08v7b-p {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 14L4 4M6.6569 2L7.6569 2L20 2L20 5M10 18L2 18L2 14L10 14M22 17.3431L22 16.3431L22 10L15.6569 10L14.6569 10M13 13L13 22L22 22M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="zd08v7b-p"/>`,
		"fallback": "keyline-icons:laptop-smartphone-off-sharp",
	});
}

export default Component;
