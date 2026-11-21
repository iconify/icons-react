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
		"content": `<style>.su2y7o71q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 2L22 22M4 6V5C4 4.7065 4.0632 4.4278 4.1767 4.1767M8.6569 3H18C19.1046 3 20 3.8954 20 5V6M12 3V6.3431M12 21V12M8.6569 21H15.3431");
}
</style><path class="su2y7o71q"/>`,
		"fallback": "keyline-icons:type-off-fill",
	});
}

export default Component;
