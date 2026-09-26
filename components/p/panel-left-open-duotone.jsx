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
		"content": `<style>.ip6d4nv6k {
  stroke-opacity: 0.4;
  d: path("M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3ZM9 3V21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pndcq9b5c {
  d: path("M13 9L16 12L13 15");
}
</style><g class="nrj6p8qat"><path class="ip6d4nv6k"/><path class="pndcq9b5c"/></g>`,
		"fallback": "keyline-icons:panel-left-open-duotone",
	});
}

export default Component;
