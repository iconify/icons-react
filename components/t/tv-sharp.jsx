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
		"content": `<style>.ihygi4bci {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 8L22 8L22 21L2 21L2 8ZM7.6998 2.6247L12 8L16.3002 2.6247");
}
</style><path class="ihygi4bci"/>`,
		"fallback": "keyline-icons:tv-sharp",
	});
}

export default Component;
