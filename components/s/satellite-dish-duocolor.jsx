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

.s6_bukz9h {
  d: path("M13 19a5.657 5.657 0 1 1-8-8Z");
}

.wdhu_4bza {
  stroke-opacity: 0.4;
  d: path("m9 15l4-4m0-4a4 4 0 0 1 4 4m-4-8a8 8 0 0 1 8 8");
}
</style><g class="nrj6p8qat"><path class="wdhu_4bza"/><path class="s6_bukz9h"/></g>`,
		"fallback": "coolicons:satellite-dish-duocolor",
	});
}

export default Component;
