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

.h6fl1vbgg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 21a2 2 0 0 1-2-2V9l6-4a5.41 5.41 0 0 1 6 0l6 4v10a2 2 0 0 1-2 2Z");
}

.k6c3jrtaw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 21H5a2 2 0 0 1-2-2V9l6-4a5.41 5.41 0 0 1 6 0l6 4v10a2 2 0 0 1-2 2zM3 9l5 5c.64.64 1.36 1 2 1h4c.64 0 1.36-.36 2-1l5-5");
}
</style><g class="ft5dv1b6b"><path class="h6fl1vbgg"/><path class="k6c3jrtaw"/></g>`,
		"fallback": "coolicons:mail-open-duotone",
	});
}

export default Component;
