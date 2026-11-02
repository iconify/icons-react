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
		"content": `<style>.f2aeklb2d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15v-3l9-9l3 3l-9 9Zm6-9l3 3");
}

.ft5dv1b6b {
  fill: none;
}

.ip84-2sbm {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 15v-3l9-9l3 3l-9 9Z");
}
</style><g class="ft5dv1b6b"><path class="ip84-2sbm"/><path class="f2aeklb2d"/></g>`,
		"fallback": "coolicons:note-edit-duotone",
	});
}

export default Component;
