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
		"content": `<style>.qkgnz6xhk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 3H18C19.6569 3 21 4.3431 21 6V18C21 19.6569 19.6569 21 18 21H6C4.3431 21 3 19.6569 3 18V6C3 4.3431 4.3431 3 6 3ZM7 9V8C7 7.4477 7.4477 7 8 7H16C16.5523 7 17 7.4477 17 8V9M12 7V17M9.5 17H14.5");
}
</style><path class="qkgnz6xhk"/>`,
		"fallback": "keyline-icons:square-type",
	});
}

export default Component;
