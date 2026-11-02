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

.n-hehbbag {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 11a2 2 0 1 1-.001-3.999A2 2 0 0 1 16 11m-8 6a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 17");
}

.shaksbcfy {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M14 9a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-8 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0M3 9h11m4 0h3M3 15h3m4 0h11");
}
</style><g class="ft5dv1b6b"><path class="n-hehbbag"/><path class="shaksbcfy"/></g>`,
		"fallback": "coolicons:slider-1-duotone",
	});
}

export default Component;
