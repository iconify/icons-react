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
		"content": `<style>.tklfdyblv {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3L21 3L21 17L7 17L3 21L3 3ZM8 7L9 7L15 7L15 13L15 14M8.7071 13.2929L9 13L14.5 7.5L14.8536 7.1464");
}
</style><path class="tklfdyblv"/>`,
		"fallback": "keyline-icons:message-square-arrow-up-right-sharp",
	});
}

export default Component;
