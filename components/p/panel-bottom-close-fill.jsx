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

.o0cvw8_am {
  fill: currentColor;
  d: path("M3 15H21V18C21 19.65685 19.65685 21 18 21H6C4.34315 21 3 19.65685 3 18V15Z");
  stroke: none;
}

.r5hfpiddi {
  d: path("M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM3 15H21M9 8L12 11L15 8");
}
</style><g class="nrj6p8qat"><path class="o0cvw8_am"/><path class="r5hfpiddi"/></g>`,
		"fallback": "keyline-icons:panel-bottom-close-fill",
	});
}

export default Component;
