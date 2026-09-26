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
		"content": `<style>.doe33_6sv {
  fill: currentColor;
  d: path("M13 21L13 3L22 3L22 21L13 21Z");
  stroke: none;
}

.e3vx1yphh {
  d: path("M4 18L4 21L22 21L22 3L4 3L4 6M13 21L13 3M1.7071 8.7071L8.2929 15.2929M8.2929 8.7071L1.7071 15.2929");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="doe33_6sv"/><path class="e3vx1yphh"/></g>`,
		"fallback": "keyline-icons:table-columns-remove-before-sharp-fill",
	});
}

export default Component;
