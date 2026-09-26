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
		"content": `<style>.m8t6p8bru {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22 3L22 21C22 21.5523 21.5523 22 21 22L3 22C2.4477 22 2 21.5523 2 21L2 3C2 2.4477 2.4477 2 3 2L21 2C21.5523 2 22 2.4477 22 3ZM7 13L7 17L9 17L9 13L7 13ZM11 8L11 17L13 17L13 8L11 8ZM15 7L15 14L17 14L17 7L15 7Z");
}
</style><path clip-rule="evenodd" class="m8t6p8bru"/>`,
		"fallback": "keyline-icons:square-align-offset-right-sharp-fill",
	});
}

export default Component;
