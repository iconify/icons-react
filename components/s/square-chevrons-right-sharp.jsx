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

.qrbvejbvf {
  d: path("M6.9571 8.2071L10.75 12L6.9571 15.7929M12.9571 8.2071L16.75 12L12.9571 15.7929");
}

.x-_5ilohg {
  d: path("M3 3L21 3L21 21L3 21L3 3Z");
}
</style><g class="gp_8x1bzb"><path class="x-_5ilohg"/><path class="qrbvejbvf"/></g>`,
		"fallback": "keyline-icons:square-chevrons-right-sharp",
	});
}

export default Component;
