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

.ooyw8-y8g {
  stroke-opacity: 0.4;
  d: path("M9 6a3 3 0 0 1 6 0");
}

.pk8zosb0y {
  d: path("M5 8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z");
}
</style><g class="nrj6p8qat"><path class="ooyw8-y8g"/><path class="pk8zosb0y"/></g>`,
		"fallback": "coolicons:shopping-bag-duocolor",
	});
}

export default Component;
