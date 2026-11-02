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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.ma3nmebwr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9.293 9.293a2.414 2.414 0 0 1 3.414 0l2 2a2.414 2.414 0 0 1 0 3.414l-6 6a3.828 3.828 0 0 1-5.414-5.414Z");
}

.rhhm9vz3o {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 16l6-6a1.414 1.414 0 0 1 2 0l2 2a1.414 1.414 0 0 1 0 2l-6 6a2.828 2.828 0 1 1-4-4m9-5l7-7");
}
</style><g class="ft5dv1b6b"><path class="ma3nmebwr"/><path class="rhhm9vz3o"/></g>`,
		"fallback": "coolicons:screwdriver-duotone",
	});
}

export default Component;
