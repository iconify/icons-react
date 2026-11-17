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
		"content": `<style>.a8a0frbjc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 17V3h8v14a4 4 0 1 1-8 0m4 0h.01M11 9l4-4l5 5L9 21m7-7h5v7H7");
}

.b77zjh09f {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h8v14a4 4 0 0 1-8 0Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="b77zjh09f"/><path class="a8a0frbjc"/></g>`,
		"fallback": "coolicons:swatches-duotone-sharp",
	});
}

export default Component;
