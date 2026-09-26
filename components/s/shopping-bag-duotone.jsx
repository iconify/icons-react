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
		"content": `<style>.l5418ebau {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M5.3 3.6C6.05542 2.59278 7.24097 2 8.5 2H15.5C16.759 2 17.9446 2.59278 18.7 3.6L20.6 6.13333C20.8596 6.47953 21 6.90059 21 7.33333V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.33333C3 6.90059 3.14036 6.47953 3.4 6.13333L5.3 3.6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.swuso9b7l {
  d: path("M4.0572 7L19.9428 7M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11");
}
</style><g class="nrj6p8qat"><path class="l5418ebau"/><path class="swuso9b7l"/></g>`,
		"fallback": "keyline-icons:shopping-bag-duotone",
	});
}

export default Component;
