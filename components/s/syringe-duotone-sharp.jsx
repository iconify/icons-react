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

.wee5qij0k {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 15l-3 3l-4-4l3-3Z");
}

.x6e3mrbje {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 7l-7 7l4 4l7-7m-5-5l6 6M8 16l-4 4m5-9l4 4m2-6l3-3m-2-2l4 4");
}
</style><g class="ft5dv1b6b"><path class="wee5qij0k"/><path class="x6e3mrbje"/></g>`,
		"fallback": "coolicons:syringe-duotone-sharp",
	});
}

export default Component;
