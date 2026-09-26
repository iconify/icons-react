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
		"content": `<style>.cc50cvs0o {
  d: path("M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xi070wb-z {
  d: path("M7 9.5L10.2 12.7L12.7 10.2L16.6 14.1M14 14.5H16.5C16.7761 14.5 17 14.2761 17 14V11.5");
}
</style><g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="xi070wb-z"/></g>`,
		"fallback": "keyline-icons:square-trending-down",
	});
}

export default Component;
