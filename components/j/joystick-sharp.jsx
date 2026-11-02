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
		"content": `<style>.dbucg5b8z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h18v6H3Zm4 0v-2m5 2V9M9 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}
</style><path class="dbucg5b8z"/>`,
		"fallback": "coolicons:joystick-sharp",
	});
}

export default Component;
