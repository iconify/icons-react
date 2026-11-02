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
		"content": `<style>.mcctxkalq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17V3h8v14a4 4 0 1 1-8 0m4 0h.01M11 9l4-4l5 5L9 21m7-7h5v7H7");
}
</style><path class="mcctxkalq"/>`,
		"fallback": "coolicons:swatches-sharp",
	});
}

export default Component;
