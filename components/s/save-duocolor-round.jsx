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

.r1etxz8pb {
  d: path("M12 21H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h8c1.28 0 2.36.36 3 1l2 2c.64.64 1 1.72 1 3v8a4 4 0 0 1-4 4zm-5 0v-3a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v3");
}

.wn8i1hruc {
  stroke-opacity: 0.4;
  d: path("M9 7h6");
}
</style><g class="nrj6p8qat"><path class="wn8i1hruc"/><path class="r1etxz8pb"/></g>`,
		"fallback": "coolicons:save-duocolor-round",
	});
}

export default Component;
