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
		"content": `<style>.dfsxb0bkr {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 17L7 17L3 21L3 3ZM12 14L12 7M8.7071 10.2929L12 7L15.2929 10.2929");
}
</style><path class="dfsxb0bkr"/>`,
		"fallback": "keyline-icons:message-square-arrow-up-sharp",
	});
}

export default Component;
