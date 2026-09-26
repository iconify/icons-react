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

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q3zikyn5a {
  d: path("M4 18L4 21L22 21L22 3L4 3L4 6M13 21L13 3M5 8L5 16M1 12L9 12");
}
</style><g class="gp_8x1bzb"><path class="doe33_6sv"/><path class="q3zikyn5a"/></g>`,
		"fallback": "keyline-icons:table-columns-add-before-sharp-fill",
	});
}

export default Component;
