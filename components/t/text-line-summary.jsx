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
		"content": `<style>.zmn30u74a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 13H14M7 8H21M7 3H21M18.6 21L21 18.75L18.6 16.5M21 18.75H7C4.7909 18.75 3 16.96 3 14.75V3");
}
</style><path class="zmn30u74a"/>`,
		"fallback": "keyline-icons:text-line-summary",
	});
}

export default Component;
