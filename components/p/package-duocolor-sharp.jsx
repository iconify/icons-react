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
		"content": `<style>.cq75u6x-g {
  stroke-opacity: 0.4;
  d: path("m4 8l2-4h12l2 4M4 8h16");
}

.h8uaxgswm {
  d: path("M4 8v12h16V8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cq75u6x-g"/><path class="h8uaxgswm"/></g>`,
		"fallback": "coolicons:package-duocolor-sharp",
	});
}

export default Component;
