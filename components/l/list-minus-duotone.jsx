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
		"content": `<style>.fdgojzbxm {
  stroke-opacity: 0.4;
  d: path("M2 6L22 6M2 12L22 12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t4ug6db2s {
  d: path("M2 18L6 18M10 18L14 18M18 18L22 18");
}
</style><g class="nrj6p8qat"><path class="fdgojzbxm"/><path class="t4ug6db2s"/></g>`,
		"fallback": "keyline-icons:list-minus-duotone",
	});
}

export default Component;
