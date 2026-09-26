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

.zs5cgmbhh {
  d: path("M9 9L9 12M15 9L15 12M8.2929 14.2929L9 15C10 16 11 16.5 12 16.5C13 16.5 14 16 15 15L15.7071 14.2929");
}
</style><g class="gp_8x1bzb"><path class="m-rom16pb"/><path class="zs5cgmbhh"/></g>`,
		"fallback": "keyline-icons:scan-face-sharp-two-tone",
	});
}

export default Component;
