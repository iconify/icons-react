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
		"content": `<style>.h_wvwhbeo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17a4 4 0 1 1 8 0v4H3zm4-4V8c0-4 6-5 7-2l5 15m-3 0h5");
}
</style><path class="h_wvwhbeo"/>`,
		"fallback": "coolicons:vacuum-cleaner-sharp",
	});
}

export default Component;
