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

.q38rixd8d {
  d: path("M3 3h14l4 4v14H3zm4 18v-7h10v7");
}

.qgo3vobus {
  stroke-opacity: 0.4;
  d: path("m9 9l2 2l4-4");
}
</style><g class="nrj6p8qat"><path class="qgo3vobus"/><path class="q38rixd8d"/></g>`,
		"fallback": "coolicons:save-check-duocolor-sharp",
	});
}

export default Component;
