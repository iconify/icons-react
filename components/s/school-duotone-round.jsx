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
		"content": `<style>.aeb857bpq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m4 7l6-3a4.47 4.47 0 0 1 4 0l6 3M6 6v5l-3 2v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4l-3-2V6m-8 4a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 11v-3a2 2 0 1 1 4 0v3");
}

.c6ib8suln {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6 6l4-2a4.47 4.47 0 0 1 4 0l4 2v5l3 2v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4l3-2Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="c6ib8suln"/><path class="aeb857bpq"/></g>`,
		"fallback": "coolicons:school-duotone-round",
	});
}

export default Component;
