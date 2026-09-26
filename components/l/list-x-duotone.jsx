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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qvcla2bco {
  d: path("M2 18H6M10 18H14M18 16L22 20M22 16L18 20");
}

.tqyk1xr1x {
  stroke-opacity: 0.4;
  d: path("M2 4H22M2 11H22");
}
</style><g class="nrj6p8qat"><path class="tqyk1xr1x"/><path class="qvcla2bco"/></g>`,
		"fallback": "keyline-icons:list-x-duotone",
	});
}

export default Component;
