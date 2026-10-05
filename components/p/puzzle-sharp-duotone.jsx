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
		"content": `<style>.fqxl4ub_x {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 6L7 7L3 7L3 11L4 11C5.6569 11 7 12.3431 7 14C7 15.6569 5.6569 17 4 17L3 17L3 21L17 21L17 17L18 17C19.6569 17 21 15.6569 21 14C21 12.3431 19.6569 11 18 11L17 11L17 7L13 7L13 6C13 4.3431 11.6569 3 10 3C8.3431 3 7 4.3431 7 6Z");
}
</style><path class="fqxl4ub_x"/>`,
		"fallback": "keyline-icons:puzzle-sharp-duotone",
	});
}

export default Component;
