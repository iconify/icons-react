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
		"content": `<style>.p6z6vjglv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 5C6 3.3431 7.3431 2 9 2L15 2C16.6569 2 18 3.3431 18 5L18 19C18 20.6569 16.6569 22 15 22L9 22C7.3431 22 6 20.6569 6 19L6 5Z");
}
</style><path class="p6z6vjglv"/>`,
		"fallback": "keyline-icons:ratio-9-16",
	});
}

export default Component;
