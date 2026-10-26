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

.m-rom16pb {
  stroke-opacity: 0.4;
  d: path("M3 9L3 3L9 3M15 3L21 3L21 9M21 15L21 21L15 21M9 21L3 21L3 15");
}

.sr7txkbjs {
  d: path("M13.7929 7.7071L9 12.5L15 12.5L10.2071 17.2929");
}
</style><g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="sr7txkbjs"/></g>`,
		"fallback": "keyline-icons:scan-zap-sharp-two-tone",
	});
}

export default Component;
