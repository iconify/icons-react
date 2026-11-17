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

.ioukncnjt {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2m4 2v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7m-8 8c1.5.75 1.5 2.25 0 3s-1.5 2.25 0 3m6-6c1.5.75 1.5 2.25 0 3s-1.5 2.25 0 3");
}

.ridyiqbnz {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 7v2a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7H5a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4Z");
}
</style><g class="ft5dv1b6b"><path class="ridyiqbnz"/><path class="ioukncnjt"/></g>`,
		"fallback": "coolicons:smoke-detector-duotone-round",
	});
}

export default Component;
