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
		"content": `<style>.butmzlboc {
  fill: currentColor;
  d: path("M18 18L18 6L12 6L12 12L6 12L6 18L18 18Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wsl9iwbmu {
  stroke-opacity: 0.4;
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M17 3L21 3L21 7M21 9.5L21 14.5M21 17L21 21L17 21M14.5 21L9.5 21M7 21L3 21L3 17M3 14.5L3 9.5");
}
</style><g class="gp_8x1bzb"><path class="wsl9iwbmu"/><path class="butmzlboc"/></g>`,
		"fallback": "keyline-icons:square-dashed-three-quarter-sharp-duotone",
	});
}

export default Component;
