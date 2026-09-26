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

.lj14h_baz {
  fill: currentColor;
  d: path("M1 19L3 19L3 21L1 21L1 19Z");
  stroke: none;
}

.uwialcivp {
  d: path("M7 21L7 15");
}

.wf5wyrz5c {
  stroke-opacity: 0.4;
  d: path("M12 21L12 11M17 21L17 7M22 21L22 3");
}
</style><g class="gp_8x1bzb"><path class="uwialcivp"/><path class="wf5wyrz5c"/><path class="lj14h_baz"/></g>`,
		"fallback": "keyline-icons:signal-low-sharp-duotone",
	});
}

export default Component;
