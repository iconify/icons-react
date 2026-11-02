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

.hum428eem {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 12a7 7 0 1 1 14 0a7 7 0 0 1-14 0");
}

.xd3vbfb5x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 12a7 7 0 1 0 14 0a7 7 0 0 0-14 0m7-9v2m0 14v2m-9-9h2m14 0h2M9 12a3 3 0 0 1 6 0m0 0a3 3 0 0 1-6 0");
}
</style><g class="ft5dv1b6b"><path class="hum428eem"/><path class="xd3vbfb5x"/></g>`,
		"fallback": "coolicons:locate-duotone",
	});
}

export default Component;
