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

.z3w0q-bsi {
  d: path("M21 17H3M7 13L3 17L7 21");
}

.zajw4fbmx {
  stroke-opacity: 0.4;
  d: path("M21 3H13C11.3431 3 10 4.3431 10 6C10 7.6569 11.3431 9 13 9H15M15 3V13M20 3V13");
}
</style><g class="nrj6p8qat"><path class="zajw4fbmx"/><path class="z3w0q-bsi"/></g>`,
		"fallback": "keyline-icons:pilcrow-left-duotone",
	});
}

export default Component;
