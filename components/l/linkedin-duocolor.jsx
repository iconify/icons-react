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

.olw6_1bxo {
  d: path("M8 11v5m0-8h.01M12 16v-3a2 2 0 1 1 4 0v3");
}

.vf402t8js {
  stroke-opacity: 0.4;
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="nrj6p8qat"><path class="vf402t8js"/><path class="olw6_1bxo"/></g>`,
		"fallback": "coolicons:linkedin-duocolor",
	});
}

export default Component;
