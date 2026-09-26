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
		"content": `<style>.brrbgz_0f {
  d: path("M2 16H22M2 20H17");
}

.e4bgubsxc {
  fill: currentColor;
  d: path("M4 3L20 3C21.65685 3 23 4.34315 23 6L23 10C23 11.65685 21.65685 13 20 13L4 13C2.34315 13 1 11.65685 1 10L1 6C1 4.34315 2.34315 3 4 3Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e4bgubsxc"/><path class="brrbgz_0f"/></g>`,
		"fallback": "keyline-icons:queue-fill",
	});
}

export default Component;
