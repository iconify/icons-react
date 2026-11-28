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
		"content": `<style>.xk0zwy4er {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L15 3L15 15L3 15ZM9 9L21 9L21 21L9 21Z");
}
</style><path class="xk0zwy4er"/>`,
		"fallback": "keyline-icons:squares-divide-sharp",
	});
}

export default Component;
