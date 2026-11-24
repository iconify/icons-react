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

.qixzcgbzi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 17l9-9a1.415 1.415 0 0 1 2 0l1 1a1.415 1.415 0 0 1 0 2l-9 9H6Z");
}

.v39d7cc3h {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 20v-3l9-9a1.414 1.414 0 0 1 2 0l1 1a1.414 1.414 0 0 1 0 2l-9 9zm8-11l3 3M4 7h6");
}
</style><g class="ft5dv1b6b"><path class="qixzcgbzi"/><path class="v39d7cc3h"/></g>`,
		"fallback": "coolicons:pencil-minus-duotone",
	});
}

export default Component;
