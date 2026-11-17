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
		"content": `<style>.e_vvrubdp {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2m-3 6v4m0 3h.01");
}

.ft5dv1b6b {
  fill: none;
}

.ombc_-bsj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M20 8H10a2 2 0 0 0-2 2v10H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z");
}
</style><g class="ft5dv1b6b"><path class="ombc_-bsj"/><path class="e_vvrubdp"/></g>`,
		"fallback": "coolicons:note-warning-corner-duotone",
	});
}

export default Component;
