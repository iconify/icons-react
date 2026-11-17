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
		"content": `<style>.qwfxo90jd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 12V5a2 2 0 1 1 4 0v7a4.472 4.472 0 1 1-4 0m8-5h6");
}
</style><path class="qwfxo90jd"/>`,
		"fallback": "coolicons:thermometer-minus-sharp",
	});
}

export default Component;
