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
		"content": `<style>.fsmmrx1br {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13 7l-6 6a1.414 1.414 0 0 0 0 2l2 2a1.414 1.414 0 0 0 2 0l6-6m-5-5l6 6M8 16l-4 4m5-9l4 4m2-6l3-3m-2-2l4 4");
}

.ft5dv1b6b {
  fill: none;
}

.ybln9ac4x {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m13 15l-2 2a1.415 1.415 0 0 1-2 0l-2-2a1.415 1.415 0 0 1 0-2l2-2Z");
}
</style><g class="ft5dv1b6b"><path class="ybln9ac4x"/><path class="fsmmrx1br"/></g>`,
		"fallback": "coolicons:syringe-duotone",
	});
}

export default Component;
