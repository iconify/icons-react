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
		"content": `<style>.kumogieiq {
  stroke-opacity: 0.4;
  d: path("m3 3l6 6m6 12h6v-6m0 6l-6-6");
}

.md225ib-y {
  d: path("M15 3h6v6m0-6L3 21");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="kumogieiq"/><path class="md225ib-y"/></g>`,
		"fallback": "coolicons:shuffle-duocolor-round",
	});
}

export default Component;
