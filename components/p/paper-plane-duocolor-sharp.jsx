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
		"content": `<style>.n-31ttcxg {
  stroke-opacity: 0.4;
  d: path("m11 13l3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xprgi_oxb {
  d: path("M21 3L3 9l8 4l4 8z");
}
</style><g class="nrj6p8qat"><path class="n-31ttcxg"/><path class="xprgi_oxb"/></g>`,
		"fallback": "coolicons:paper-plane-duocolor-sharp",
	});
}

export default Component;
