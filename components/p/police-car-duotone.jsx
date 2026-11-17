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

.odriu2w_p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 8V6h2v2m-2 0h2M7 5h1m8 0h1M8 15h.01M16 15h.01M12 18H6a2 2 0 0 1-2-2v-4l1-2c.613-1.226 1.387-2 2-2h10c.613 0 1.387.774 2 2l1 2v4a2 2 0 0 1-2 2zm-6 0h2v2H6Zm10 0h2v2h-2ZM3 12h18");
}

.q14kf2bgl {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M16 18H8v2H6v-2a2 2 0 0 1-2-2v-4l1-2c.326-.651 1.15-1.999 2-2h10c.85.001 1.674 1.349 2 2l1 2v4a2 2 0 0 1-2 2v2h-2Z");
}
</style><g class="ft5dv1b6b"><path class="q14kf2bgl"/><path class="odriu2w_p"/></g>`,
		"fallback": "coolicons:police-car-duotone",
	});
}

export default Component;
