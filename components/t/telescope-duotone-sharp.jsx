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
		"content": `<style>.eu4z3fb8l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 10l14-7l2 4l-14 7zm10-5l2 4m-4 2L7 21m5-10l5 10");
}

.ft5dv1b6b {
  fill: none;
}

.s9ecjmc5j {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17.553 2.106a1 1 0 0 1 1.341.447l2 4a1 1 0 0 1-.447 1.341l-14 7a1 1 0 0 1-1.341-.447l-2-4a1 1 0 0 1 .447-1.341Z");
}
</style><g class="ft5dv1b6b"><path class="s9ecjmc5j"/><path class="eu4z3fb8l"/></g>`,
		"fallback": "coolicons:telescope-duotone-sharp",
	});
}

export default Component;
