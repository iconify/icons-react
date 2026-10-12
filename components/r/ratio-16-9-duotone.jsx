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
		"content": `<style>.ejmk_bc-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 9C2 7.3431 3.3431 6 5 6L19 6C20.6569 6 22 7.3431 22 9L22 15C22 16.6569 20.6569 18 19 18L5 18C3.3431 18 2 16.6569 2 15L2 9Z");
}
</style><path class="ejmk_bc-b"/>`,
		"fallback": "keyline-icons:ratio-16-9-duotone",
	});
}

export default Component;
