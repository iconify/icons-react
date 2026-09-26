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
		"content": `<style>.gk04kqvbi {
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M21 15L21 21L15 21M9 21L3 21L3 15M13 13L16.2929 16.2929");
}

.gn4rl1fxw {
  fill: currentColor;
  d: path("M15 11C15 13.2091 13.2091 15 11 15C8.7909 15 7 13.2091 7 11C7 8.7909 8.7909 7 11 7C13.2091 7 15 8.7909 15 11Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="gp_8x1bzb"><path class="gn4rl1fxw"/><path class="gk04kqvbi"/></g>`,
		"fallback": "keyline-icons:scan-search-sharp-fill",
	});
}

export default Component;
