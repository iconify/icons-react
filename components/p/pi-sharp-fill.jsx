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
		"content": `<style>.yfxqz0b0t {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M1 5L23 5M8 5L8 20M16 5L16 16C16 17.6569 17.3431 19 19 19L20 19");
}
</style><path class="yfxqz0b0t"/>`,
		"fallback": "keyline-icons:pi-sharp-fill",
	});
}

export default Component;
