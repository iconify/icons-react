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
		"content": `<style>.eloqc2btp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18.7081 16L12.7454 22.6667C12.3478 23.1111 11.6522 23.1111 11.2546 22.6667L5.2918 16C3.857 14.3958 3 12.1523 3 10C3 5.1675 7.1675 1 12 1C16.8325 1 21 5.1675 21 10C21 12.1523 20.143 14.3958 18.7081 16Z");
  stroke: none;
}

.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.jbky7xpdt {
  d: path("M15 10C15 11.6569 13.6569 13 12 13C10.3431 13 9 11.6569 9 10C9 8.3431 10.3431 7 12 7C13.6569 7 15 8.3431 15 10Z");
}
</style><g class="gp_8x1bzb"><path class="eloqc2btp"/><path class="jbky7xpdt"/></g>`,
		"fallback": "keyline-icons:map-pin-sharp-duotone",
	});
}

export default Component;
