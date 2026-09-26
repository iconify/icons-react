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
		"content": `<style>.ykze3k15m {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 4L22 4L22 20L2 20L2 4ZM2 8L22 8M2 12L6 12L6 13C6 14.1046 6.8954 15 8 15C9.1046 15 10 14.1046 10 13L10 12L22 12");
}
</style><path class="ykze3k15m"/>`,
		"fallback": "keyline-icons:wallet-cards-sharp",
	});
}

export default Component;
