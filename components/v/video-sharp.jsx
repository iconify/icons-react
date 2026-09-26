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
		"content": `<style>.wnjr0mc5h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L16 12L16 21L2 21L2 12ZM16 15L22 12L22 21L16 18M8 5.5C8 6.8807 6.8807 8 5.5 8C4.1193 8 3 6.8807 3 5.5C3 4.1193 4.1193 3 5.5 3C6.8807 3 8 4.1193 8 5.5ZM17 5.5C17 6.8807 15.8807 8 14.5 8C13.1193 8 12 6.8807 12 5.5C12 4.1193 13.1193 3 14.5 3C15.8807 3 17 4.1193 17 5.5Z");
}
</style><path class="wnjr0mc5h"/>`,
		"fallback": "keyline-icons:video-sharp",
	});
}

export default Component;
