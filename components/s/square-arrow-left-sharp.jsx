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
		"content": `<style>.aqiqeubum {
  d: path("M17 12L8.0852 12M12.1881 7.6975L8 12L12.1881 16.3025");
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="aqiqeubum"/></g>`,
		"fallback": "keyline-icons:square-arrow-left-sharp",
	});
}

export default Component;
