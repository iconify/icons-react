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
		"content": `<style>.bkfonllql {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12L6 12L10 12L11 12M5 16L6 16L14 16L15 16M2 4L22 4L22 20L2 20ZM14 8L18 8L18 12L14 12Z");
}
</style><path class="bkfonllql"/>`,
		"fallback": "keyline-icons:postcard-sharp",
	});
}

export default Component;
