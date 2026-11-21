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
		"content": `<style>.h-s_2ublh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M22 6L22 18L16 18L12 13L8 18L2 18L2 6Z");
}
</style><path class="h-s_2ublh"/>`,
		"fallback": "keyline-icons:rectangle-goggles-sharp",
	});
}

export default Component;
