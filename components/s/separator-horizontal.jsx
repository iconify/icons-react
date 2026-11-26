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
		"content": `<style>.fw44vzbku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3L17 3C18.1046 3 19 3.8954 19 5L19 6C19 7.1046 18.1046 8 17 8L7 8C5.8954 8 5 7.1046 5 6L5 5C5 3.8954 5.8954 3 7 3ZM3 12H21M7 16L17 16C18.1046 16 19 16.8954 19 18L19 19C19 20.1046 18.1046 21 17 21L7 21C5.8954 21 5 20.1046 5 19L5 18C5 16.8954 5.8954 16 7 16Z");
}
</style><path class="fw44vzbku"/>`,
		"fallback": "keyline-icons:separator-horizontal",
	});
}

export default Component;
