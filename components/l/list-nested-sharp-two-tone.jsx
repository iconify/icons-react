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
		"content": `<style>.a7s0ujb6m {
  stroke-opacity: 0.4;
  d: path("M8 4.5L22 4.5M10 12L22 12M12 19.5L22 19.5");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.q4_xqmble {
  d: path("M3 3L5 4.5L3 6ZM5 10.5L7 12L5 13.5ZM7 18L9 19.5L7 21Z");
}
</style><g class="gp_8x1bzb"><path class="a7s0ujb6m"/><path class="q4_xqmble"/></g>`,
		"fallback": "keyline-icons:list-nested-sharp-two-tone",
	});
}

export default Component;
