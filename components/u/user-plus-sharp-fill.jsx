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

.s_7e9gbgc {
  fill: currentColor;
  d: path("M9 3C11.0711 3 13 4.9289 13 7C13 9.0711 11.0711 11 9 11C6.9289 11 5 9.0711 5 7C5 4.9289 6.9289 3 9 3ZM8 13L10 13C13.7279 13 17 16.2721 17 20L17 21C17 21.5523 16.5523 22 16 22L2 22C1.4477 22 1 21.5523 1 21L1 20C1 16.2721 4.2721 13 8 13Z");
  stroke: none;
}

.sd3rpgvro {
  d: path("M19 3L19 11M15 7L23 7");
}
</style><g class="gp_8x1bzb"><path class="sd3rpgvro"/><path class="s_7e9gbgc"/></g>`,
		"fallback": "keyline-icons:user-plus-sharp-fill",
	});
}

export default Component;
