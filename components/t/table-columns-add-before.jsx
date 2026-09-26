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
		"content": `<style>.dzwvp6lgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.1716 19C4.5954 20.1986 5.7287 21 7 21L19 21C20.6569 21 22 19.6569 22 18L22 6C22 4.3431 20.6569 3 19 3L7 3C5.7287 3 4.5954 3.8014 4.1716 5M13 21L13 3M5 9L5 15M2 12L8 12");
}
</style><path class="dzwvp6lgu"/>`,
		"fallback": "keyline-icons:table-columns-add-before",
	});
}

export default Component;
