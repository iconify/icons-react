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
		"content": `<style>.bhjf0ktnt {
  d: path("M9 6v5a3 3 0 0 0 6 0V6a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tjyn6ac5s {
  stroke-opacity: 0.4;
  d: path("M12 18v3M5 10v1a7 7 0 0 0 14 0v-1");
}
</style><g class="nrj6p8qat"><path class="tjyn6ac5s"/><path class="bhjf0ktnt"/></g>`,
		"fallback": "coolicons:microphone-duocolor",
	});
}

export default Component;
