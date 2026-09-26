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
		"content": `<style>.wg2sg0nmw {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 14L4 2L20 2L20 5M10 18L2 18L2 14L10 14M22 22L22 10L13 10L13 22L22 22ZM16 14L19 14");
}
</style><path class="wg2sg0nmw"/>`,
		"fallback": "keyline-icons:laptop-smartphone-sharp",
	});
}

export default Component;
