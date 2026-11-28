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
		"content": `<style>.s8k1bp7nb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3C10.6569 3 12 4.3431 12 6C12 7.6569 10.6569 9 9 9C7.3432 9 6 7.6569 6 6C6 4.3431 7.3432 3 9 3ZM10.8293 21L2 21L2 19C2 15.6863 4.6863 13 8 13L10.8293 13M16.6057 21L13.8292 12.8225L22 15.7352L18.5448 17.4084L16.6057 21Z");
}
</style><path class="s8k1bp7nb"/>`,
		"fallback": "keyline-icons:user-cursor-sharp",
	});
}

export default Component;
