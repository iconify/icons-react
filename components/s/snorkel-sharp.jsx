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
		"content": `<style>.no45gcb8w {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L18 8L18 15L12.5 15L10.5 13L9.5 13L7.5 15L2 15ZM22 4L22 19L10 19L9 19");
}
</style><path class="no45gcb8w"/>`,
		"fallback": "keyline-icons:snorkel-sharp",
	});
}

export default Component;
