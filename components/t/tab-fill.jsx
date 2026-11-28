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

.sieogvbxy {
  d: path("M12 3V7C12 7.552 12.4477 8 13 8H21M6 3H18C19.6569 3 21 4.343 21 6V18C21 19.657 19.6569 21 18 21H6C4.3432 21 3 19.657 3 18V6C3 4.343 4.3432 3 6 3Z");
}

.uyac2zjpy {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 3H12V7C12 7.552 12.4477 8 13 8H21V6C21 4.343 19.6569 3 18 3Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="uyac2zjpy"/><path class="sieogvbxy"/></g>`,
		"fallback": "keyline-icons:tab-fill",
	});
}

export default Component;
