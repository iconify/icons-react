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
		"content": `<style>.ltsha6yuy {
  stroke-opacity: 0.4;
  d: path("M8 15h8");
}

.m8lkn2a7c {
  d: path("M3 5h18v14H3Zm3 4h.01M9 9h.01M12 9h.01M15 9h.01M18 9h.01M6 12h.01M9 12h.01M12 12h.01M15 12h.01M18 12h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ltsha6yuy"/><path class="m8lkn2a7c"/></g>`,
		"fallback": "coolicons:keyboard-duocolor-sharp",
	});
}

export default Component;
