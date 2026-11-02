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
		"content": `<style>.i536a978p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 4c.693 0 1.48.787 2 2l3 7c.78 1.82 2.353 3 4 3h6M6 7h13c.82 0 1.328 1.016 1 2l-1 3c-.2.597-.602 1-1 1H8m0 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m8 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="i536a978p"/>`,
		"fallback": "coolicons:shopping-cart-alt-round",
	});
}

export default Component;
