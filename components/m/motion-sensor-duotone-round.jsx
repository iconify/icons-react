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

.laz4rfcyt {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 4h10A5 5 0 0 1 7 4");
}

.ozd9b4b-j {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 4A5 5 0 0 1 7 4M4 4h16m-2 8a10 10 0 0 1-12 0m15 4a15 15 0 0 1-18 0");
}
</style><g class="ft5dv1b6b"><path class="laz4rfcyt"/><path class="ozd9b4b-j"/></g>`,
		"fallback": "coolicons:motion-sensor-duotone-round",
	});
}

export default Component;
