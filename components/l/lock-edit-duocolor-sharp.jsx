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
		"content": `<style>.kskc15b9j {
  d: path("M4 9h16v12H4Zm4 0V7a4 4 0 1 1 8 0v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p6d3pppgq {
  stroke-opacity: 0.4;
  d: path("M9 18v-2l4-4l2 2l-4 4Z");
}
</style><g class="nrj6p8qat"><path class="p6d3pppgq"/><path class="kskc15b9j"/></g>`,
		"fallback": "coolicons:lock-edit-duocolor-sharp",
	});
}

export default Component;
