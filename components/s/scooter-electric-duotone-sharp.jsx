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

.stx4qi3bg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 4h-4l2 12M7 18h5c2 0 2-8 6-8M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M10 4L7 8h4l-3 4");
}

.wk0ignbhf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 20a2 2 0 1 1-.001-3.999A2 2 0 0 1 5 20m14 0a2 2 0 1 1-.001-3.999A2 2 0 0 1 19 20");
}
</style><g class="ft5dv1b6b"><path class="wk0ignbhf"/><path class="stx4qi3bg"/></g>`,
		"fallback": "coolicons:scooter-electric-duotone-sharp",
	});
}

export default Component;
