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

.mx7nq8blt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 20v-8a6 6 0 1 1 12 0h4v5c-.001 1.697-1.303 2.999-3 3Z");
}

.z39kxgb4s {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 20v-8a6 6 0 1 1 12 0a4 4 0 1 1-8 0a2 2 0 1 1 4 0m-8 8h13c1.7 0 3-1.3 3-3V8m0 0l-2-4m2 4l2-4");
}
</style><g class="ft5dv1b6b"><path class="mx7nq8blt"/><path class="z39kxgb4s"/></g>`,
		"fallback": "coolicons:snail-duotone-round",
	});
}

export default Component;
