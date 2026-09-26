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
		"content": `<style>.lwaj0vjwi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z");
  stroke: none;
}

.mgknzi5lw {
  d: path("M7 14.5L10.2 11.3L12.7 13.8L16.6 9.9M14 9.5H16.5C16.7761 9.5 17 9.72386 17 10V12.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="mgknzi5lw"/></g>`,
		"fallback": "keyline-icons:square-trending-up-duotone",
	});
}

export default Component;
