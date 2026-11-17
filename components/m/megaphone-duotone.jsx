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

.xoc3klb-o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m11 8l8-4c.919-.459 2 .081 2 1v12c0 .919-1.081 1.459-2 1l-8-4Z");
}

.ye9frhb-l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m11 8l8-4c.919-.46 2 .081 2 1v12c0 .919-1.081 1.46-2 1l-8-4zm0 0H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6m-6 0v5a2 2 0 1 0 4 0v-5");
}
</style><g class="ft5dv1b6b"><path class="xoc3klb-o"/><path class="ye9frhb-l"/></g>`,
		"fallback": "coolicons:megaphone-duotone",
	});
}

export default Component;
