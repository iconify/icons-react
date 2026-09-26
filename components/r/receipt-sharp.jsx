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
		"content": `<style>.lielxvqbd {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 9L13 9M7 13L17 13M4 2L20 2L20 20L16 22L12 20L8 22L4 20L4 2Z");
}
</style><path class="lielxvqbd"/>`,
		"fallback": "keyline-icons:receipt-sharp",
	});
}

export default Component;
