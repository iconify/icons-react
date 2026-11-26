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
		"content": `<style>.wqwi0fb-p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 3L13 3C14.1046 3 15 3.8954 15 5L15 8C15 8.5523 15.4477 9 16 9L19 9C20.1046 9 21 9.8954 21 11L21 19C21 20.1046 20.1046 21 19 21L11 21C9.8954 21 9 20.1046 9 19L9 16C9 15.4477 8.5523 15 8 15L5 15C3.8954 15 3 14.1046 3 13L3 5C3 3.8954 3.8954 3 5 3ZM11 9C9.8954 9 9 9.8954 9 11M15 13C15 14.1046 14.1046 15 13 15");
}
</style><path class="wqwi0fb-p"/>`,
		"fallback": "keyline-icons:squares-exclude",
	});
}

export default Component;
