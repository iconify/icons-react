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

.uwialcivp {
  d: path("M7 21L7 15");
}

.w6vt9xnjt {
  fill: currentColor;
  d: path("M1 19L3 19L3 21L1 21Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="uwialcivp"/><path class="w6vt9xnjt"/></g>`,
		"fallback": "keyline-icons:signal-low-sharp",
	});
}

export default Component;
