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
		"content": `<style>.auw84euhw {
  fill: currentColor;
  d: path("M5 8h14V6H5z");
  opacity: var(--svg-opacity--0-3, 0.3);
}

.av62z5b0g {
  fill: currentColor;
  d: path("M7 11h2v2H7zm12-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 16H5V10h14zm0-12H5V6h14zm-4 3h2v2h-2zm-4 0h2v2h-2z");
}
</style><path class="auw84euhw"/><path class="av62z5b0g"/>`,
		"fallback": "ic:twotone-date-range",
	});
}

export default Component;
