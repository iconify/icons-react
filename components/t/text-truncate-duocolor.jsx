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

.p3zn41bdm {
  d: path("M3 6h18M3 18h6");
}

.tgbev8bfa {
  stroke-opacity: 0.4;
  d: path("M13 18h.01M17 18h.01M21 18h-.01");
}
</style><g class="nrj6p8qat"><path class="tgbev8bfa"/><path class="p3zn41bdm"/></g>`,
		"fallback": "coolicons:text-truncate-duocolor",
	});
}

export default Component;
