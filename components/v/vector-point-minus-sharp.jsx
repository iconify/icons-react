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
		"content": `<style>.nljjvmupc {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 9L13 9L13 13L9 13ZM2 20L2 19C2 15 5 11 9 11M13 11C17 11 22 9 22 5L22 4M15 19L23 19");
}
</style><path class="nljjvmupc"/>`,
		"fallback": "keyline-icons:vector-point-minus-sharp",
	});
}

export default Component;
