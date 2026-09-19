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
		"content": `<style>.dpd831bbz {
  fill: currentColor;
  d: path("M18 4v16H6V4zm-2.5 6.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.i1ibl_m3k {
  fill: currentColor;
  d: path("M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5");
}
</style><path class="dpd831bbz"/><path class="i1ibl_m3k"/>`,
		"fallback": "ic:twotone-sensor-door",
	});
}

export default Component;
