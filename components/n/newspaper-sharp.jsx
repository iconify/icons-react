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
		"content": `<style>.t0zgv8urq {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 3L21 3L21 21L3 21L3 9L8 9L8 3ZM8 9L8 21M11 8L18 8M11 12L18 12M11 16L16 16");
}
</style><path class="t0zgv8urq"/>`,
		"fallback": "keyline-icons:newspaper-sharp",
	});
}

export default Component;
