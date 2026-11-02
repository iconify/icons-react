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
		"content": `<style>.dqjr7ua5o {
  stroke-opacity: 0.4;
  d: path("M7 12h.01M9 8h.01M14 7h.01M17 11h.01");
}

.lg-qqfb-f {
  d: path("M12 21a9 9 0 1 1 9-9a4 4 0 0 1-4 4h-2a2 2 0 0 0-2 2v2a1 1 0 0 1-1 1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dqjr7ua5o"/><path class="lg-qqfb-f"/></g>`,
		"fallback": "coolicons:palette-duocolor-round",
	});
}

export default Component;
