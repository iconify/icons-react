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
		"content": `<style>.kjogy9b8h {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3.7071 3.7071L19.8243 19.8243M20 13L20 20L13 20");
}
</style><path class="kjogy9b8h"/>`,
		"fallback": "keyline-icons:move-down-right-sharp-two-tone",
	});
}

export default Component;
