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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sfotcmble {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM12 3L12 9M12 15L12 21M3 9L21 9M3 15L21 15");
}

.ur1qnibrv {
  fill: currentColor;
  d: path("M3 9L21 9L21 15L3 15L3 9Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="ur1qnibrv"/><path class="sfotcmble"/></g>`,
		"fallback": "keyline-icons:table-cells-merge-sharp-fill",
	});
}

export default Component;
