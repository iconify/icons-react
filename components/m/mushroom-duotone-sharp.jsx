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
		"content": `<style>.agbiupgjg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 11a8 8 0 0 1 16 0h-6v8a2 2 0 1 1-4 0v-8Z");
}

.e7_jnabwg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11a8 8 0 1 1 16 0Zm6 0v8a2 2 0 1 0 4 0v-8");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="agbiupgjg"/><path class="e7_jnabwg"/></g>`,
		"fallback": "coolicons:mushroom-duotone-sharp",
	});
}

export default Component;
