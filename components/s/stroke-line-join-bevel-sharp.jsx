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
		"content": `<style>.ju7y0_t1t {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 22L3 11L11 3L22 3M11 22L11 11L22 11");
}
</style><path class="ju7y0_t1t"/>`,
		"fallback": "keyline-icons:stroke-line-join-bevel-sharp",
	});
}

export default Component;
