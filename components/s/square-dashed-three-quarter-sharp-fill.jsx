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

.kyw3f2bpx {
  d: path("M3 7L3 3L7 3M9.5 3L14.5 3M17 3L21 3L21 7M21 9.5L21 14.5M21 17L21 21L17 21M14.5 21L9.5 21M7 21L3 21L3 17M3 14.5L3 9.5");
}

.ovt7tgj1w {
  stroke-linejoin: miter;
  d: path("M12 7L17 7L17 17L7 17L7 12L12 12L12 7Z");
}
</style><g class="gp_8x1bzb"><path class="kyw3f2bpx"/><path class="ovt7tgj1w"/></g>`,
		"fallback": "keyline-icons:square-dashed-three-quarter-sharp-fill",
	});
}

export default Component;
