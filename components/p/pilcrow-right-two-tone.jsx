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
		"content": `<style>.l0j7jophs {
  stroke-opacity: 0.4;
  d: path("M14 3H6C4.3431 3 3 4.3431 3 6C3 7.6569 4.3431 9 6 9H8M8 3V13M13 3V13");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p38x9wbwo {
  d: path("M3 17H21M17 13L21 17L17 21");
}
</style><g class="nrj6p8qat"><path class="l0j7jophs"/><path class="p38x9wbwo"/></g>`,
		"fallback": "keyline-icons:pilcrow-right-two-tone",
	});
}

export default Component;
