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
		"content": `<style>.b_yr8yb8d {
  stroke-opacity: 0.4;
  d: path("M8 15a5 5 0 1 1 8 0M3 12a9 9 0 0 1 18 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rar5j9b-h {
  d: path("M11 12a1 1 0 1 0 2 0a1 1 0 0 0-2 0m1 1v8");
}
</style><g class="nrj6p8qat"><path class="b_yr8yb8d"/><path class="rar5j9b-h"/></g>`,
		"fallback": "coolicons:podcast-duocolor-sharp",
	});
}

export default Component;
