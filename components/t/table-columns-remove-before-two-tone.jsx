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
		"content": `<style>.b458ftblo {
  d: path("M4.1716 19C4.5954 20.1986 5.7287 21 7 21L19 21C20.6569 21 22 19.6569 22 18L22 6C22 4.3431 20.6569 3 19 3L7 3C5.7287 3 4.5954 3.8014 4.1716 5M13 21L13 3M2 9L8 15M8 9L2 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.txzca0s1j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M13 21L13 3L19 3C20.6569 3 22 4.3431 22 6L22 18C22 19.6569 20.6569 21 19 21L13 21Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="txzca0s1j"/><path class="b458ftblo"/></g>`,
		"fallback": "keyline-icons:table-columns-remove-before-two-tone",
	});
}

export default Component;
