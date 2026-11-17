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
		"content": `<style>.al_5hdbti {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 20v-4L15 5a1.414 1.414 0 0 1 2 0l2 2a1.414 1.414 0 0 1 0 2L8 20zm8-12l4 4m-8 8h12");
}

.ft5dv1b6b {
  fill: none;
}

.j04wud_og {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 20v-4L15 5a1.415 1.415 0 0 1 2 0l2 2a1.415 1.415 0 0 1 0 2L8 20Z");
}
</style><g class="ft5dv1b6b"><path class="j04wud_og"/><path class="al_5hdbti"/></g>`,
		"fallback": "coolicons:pencil-line-duotone",
	});
}

export default Component;
