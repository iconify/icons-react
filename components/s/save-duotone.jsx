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

.qc4hjmn4b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11c.64 0 1.36.36 2 1l2 2c.64.64 1 1.36 1 2v11a2 2 0 0 1-2 2zm-5 0v-5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5M9 7h6");
}

.s4p9tdbmf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11c.763 0 1.479.48 2 1l2 2c.52.521 1 1.237 1 2v11a2 2 0 0 1-2 2");
}
</style><g class="ft5dv1b6b"><path class="s4p9tdbmf"/><path class="qc4hjmn4b"/></g>`,
		"fallback": "coolicons:save-duotone",
	});
}

export default Component;
