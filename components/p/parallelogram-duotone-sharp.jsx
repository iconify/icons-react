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
		"content": `<style>.cysb9s4ig {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 3h14l-4 18H3z");
}

.ft5dv1b6b {
  fill: none;
}

.n5u5y3gjr {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 3h14l-4 18H3Z");
}
</style><g class="ft5dv1b6b"><path class="n5u5y3gjr"/><path class="cysb9s4ig"/></g>`,
		"fallback": "coolicons:parallelogram-duotone-sharp",
	});
}

export default Component;
