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

.vmayczbrg {
  d: path("M16 9L13 12L16 15");
}

.y0wdx0w6y {
  d: path("M9 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H9V3ZM18 3C19.6569 3 21 4.34315 21 6M21 18C21 19.6569 19.6569 21 18 21M13 3H14M13 21H14M21 10.5V13.5");
}
</style><g class="nrj6p8qat"><path class="y0wdx0w6y"/><path class="vmayczbrg"/></g>`,
		"fallback": "keyline-icons:panel-left-close-dashed",
	});
}

export default Component;
