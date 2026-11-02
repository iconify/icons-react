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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oc7ra1pma {
  d: path("M9 8H7a4 4 0 1 0 0 8h2m6-8h2a4 4 0 1 1 0 8h-2");
}

.q1qzyoe_f {
  stroke-opacity: 0.4;
  d: path("M8 12h8");
}
</style><g class="nrj6p8qat"><path class="q1qzyoe_f"/><path class="oc7ra1pma"/></g>`,
		"fallback": "coolicons:link-horizontal-duocolor-sharp",
	});
}

export default Component;
