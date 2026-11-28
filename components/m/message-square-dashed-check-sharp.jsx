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
		"content": `<style>.c_j2lrgzf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 8.75L3 3L7 3M9.5 3L14.5 3M17 3L21 3L21 8.75M21 11.25L21 17L17 17M15 17L10 17M8 17L7 17L3 21L3 11.25M8.7071 9.7071L11 12L15.2929 7.7071");
}
</style><path class="c_j2lrgzf"/>`,
		"fallback": "keyline-icons:message-square-dashed-check-sharp",
	});
}

export default Component;
