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

.kicw5bc3n {
  d: path("M3 3L21 3L21 21L3 21L3 3ZM3 9L21 9M8.7071 16.2929L12 13L15.2929 16.2929");
}

.zyu_ccbvv {
  fill: currentColor;
  d: path("M3 3L21 3L21 9L3 9L3 3Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="zyu_ccbvv"/><path class="kicw5bc3n"/></g>`,
		"fallback": "keyline-icons:panel-top-close-sharp-fill",
	});
}

export default Component;
