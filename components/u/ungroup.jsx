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
		"content": `<style>.aojxtpkko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 3H19C20.1046 3 21 3.8954 21 5V10C21 11.1046 20.1046 12 19 12H14C12.8954 12 12 11.1046 12 10V5C12 3.8954 12.8954 3 14 3ZM8 12H5C3.8954 12 3 12.8954 3 14V19C3 20.1046 3.8954 21 5 21H10C11.1046 21 12 20.1046 12 19V16M8 3V5M3 8H5M16 19V21M19 16H21");
}
</style><path class="aojxtpkko"/>`,
		"fallback": "keyline-icons:ungroup",
	});
}

export default Component;
