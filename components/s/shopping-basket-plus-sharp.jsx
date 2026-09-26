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
		"content": `<style>.gpbmhubfa {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 21L5 21L2.0001 10L21.9999 10L21.5262 11.7369M9 10L10 3L16 3L15 10M19 14L19 22M15 18L23 18");
}
</style><path class="gpbmhubfa"/>`,
		"fallback": "keyline-icons:shopping-basket-plus-sharp",
	});
}

export default Component;
