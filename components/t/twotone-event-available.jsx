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
		"content": `<style>.qpeg5hafp {
  fill: currentColor;
  d: path("M5 5h14v2H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.wplzgw_hg {
  fill: currentColor;
  d: path("M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V9h14zm0-12H5V5h14zm-2.51 4.53l-1.06-1.06l-4.87 4.87l-2.11-2.11l-1.06 1.06l3.17 3.17z");
}
</style><path class="qpeg5hafp"/><path class="wplzgw_hg"/>`,
		"fallback": "ic:twotone-event-available",
	});
}

export default Component;
