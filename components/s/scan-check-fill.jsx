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
		"content": `<style>.ss8519b0g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8V6C3 4.3431 4.3431 3 6 3H8M16 3H18C19.6569 3 21 4.3431 21 6V8M21 16V18C21 19.6569 19.6569 21 18 21H16M8 21H6C4.3431 21 3 19.6569 3 18V16M8 11.5L11 14.5L16 9.5");
}
</style><path class="ss8519b0g"/>`,
		"fallback": "keyline-icons:scan-check-fill",
	});
}

export default Component;
