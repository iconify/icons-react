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
		"content": `<style>.g7ycs1b4z {
  d: path("M6 3H18C19.65685 3 21 4.34315 21 6V18C21 19.65685 19.65685 21 18 21H6C4.34315 21 3 19.65685 3 18V6C3 4.34315 4.34315 3 6 3ZM9 3V21M9 9H21M9 15H21");
}

.jfp2fyuan {
  fill: currentColor;
  d: path("M6 3H9V21H6C4.34315 21 3 19.65685 3 18V6C3 4.34315 4.34315 3 6 3Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jfp2fyuan"/><path class="g7ycs1b4z"/></g>`,
		"fallback": "keyline-icons:table-cells-rows-fill",
	});
}

export default Component;
