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

.ge4m9l1uk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 6l6-3l6 3v5l3 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6l3-2Z");
}

.xv_becbox {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 7l8-4l8 4M6 6v5l-3 2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6l-3-2V6m-8 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 11v-3a2 2 0 1 1 4 0v3");
}
</style><g class="ft5dv1b6b"><path class="ge4m9l1uk"/><path class="xv_becbox"/></g>`,
		"fallback": "coolicons:school-duotone",
	});
}

export default Component;
