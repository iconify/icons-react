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
		"content": `<style>.hw_dngr3f {
  stroke-opacity: 0.4;
  d: path("m8 16l8-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w00z3jbhb {
  d: path("m7 11l-2 2a4.243 4.243 0 0 0 6 6l2-2m4-4l2-2a4.243 4.243 0 0 0-6-6l-2 2");
}
</style><g class="nrj6p8qat"><path class="hw_dngr3f"/><path class="w00z3jbhb"/></g>`,
		"fallback": "coolicons:link-duocolor",
	});
}

export default Component;
