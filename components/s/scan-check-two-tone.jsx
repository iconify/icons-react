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
		"content": `<style>.ju25hstxx {
  d: path("M8 11.5L11 14.5L16 9.5");
}

.m71g2y-7m {
  stroke-opacity: 0.4;
  d: path("M3 8V6C3 4.3431 4.3431 3 6 3H8M16 3H18C19.6569 3 21 4.3431 21 6V8M21 16V18C21 19.6569 19.6569 21 18 21H16M8 21H6C4.3431 21 3 19.6569 3 18V16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="m71g2y-7m"/><path class="ju25hstxx"/></g>`,
		"fallback": "keyline-icons:scan-check-two-tone",
	});
}

export default Component;
