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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.i7o4nvbji {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M11 5h2l6 15H5Z");
}

.wuz3n1w3q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 20l6-15h2l6 15M3 20h18M9 10h6m-8 5h10");
}
</style><g class="ft5dv1b6b"><path class="i7o4nvbji"/><path class="wuz3n1w3q"/></g>`,
		"fallback": "coolicons:traffic-cone-duotone-sharp",
	});
}

export default Component;
