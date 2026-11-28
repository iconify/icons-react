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

.kj2waq_ni {
  d: path("M18 14L18 22M14 18L22 18");
}

.pk1pnpbjz {
  stroke-opacity: 0.4;
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M9 21L3 21L3 15");
}
</style><g class="gp_8x1bzb"><path class="pk1pnpbjz"/><path class="kj2waq_ni"/></g>`,
		"fallback": "keyline-icons:scan-plus-sharp-duotone",
	});
}

export default Component;
