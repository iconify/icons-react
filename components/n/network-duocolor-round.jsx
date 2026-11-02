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

.ok0pdobun {
  d: path("M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2ZM3 18a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm12 0a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2Z");
}

.ycao8bsrk {
  stroke-opacity: 0.4;
  d: path("M12 8v4m-6 4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4");
}
</style><g class="nrj6p8qat"><path class="ycao8bsrk"/><path class="ok0pdobun"/></g>`,
		"fallback": "coolicons:network-duocolor-round",
	});
}

export default Component;
