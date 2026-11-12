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

.hjytbsnnk {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0Zm7 0a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0Zm7 0a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0ZM3 8h16M5 16h16");
}

.z9vw6xban {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 4v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0m7 0v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0m7 0v16a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0");
}
</style><g class="ft5dv1b6b"><path class="z9vw6xban"/><path class="hjytbsnnk"/></g>`,
		"fallback": "coolicons:radiator-duotone",
	});
}

export default Component;
