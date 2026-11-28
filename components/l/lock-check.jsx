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
		"content": `<style>.k_7g99bha {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 10L7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5L16.5 10M4 13L4 19C4 20.6569 5.34315 22 7 22L17 22C18.6569 22 20 20.6569 20 19L20 13C20 11.3431 18.6569 10 17 10L7 10C5.34315 10 4 11.3431 4 13ZM9 16L11 18L15 14");
}
</style><path class="k_7g99bha"/>`,
		"fallback": "keyline-icons:lock-check",
	});
}

export default Component;
