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
		"content": `<style>.b87fthq3e {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8M4 8l1-2c.613-1.226 1.387-2 2-2h10c.613 0 1.387.774 2 2l1 2M4 8h16");
}

.ft5dv1b6b {
  fill: none;
}

.y5xasbcun {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 6c.326-.651 1.15-1.999 2-2h10c.85.001 1.674 1.349 2 2l1 2H4Z");
}
</style><g class="ft5dv1b6b"><path class="y5xasbcun"/><path class="b87fthq3e"/></g>`,
		"fallback": "coolicons:package-duotone",
	});
}

export default Component;
