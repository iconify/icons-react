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
		"content": `<style>.axcf-wb4p {
  stroke-opacity: 0.4;
  d: path("m2 2l20 20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vkrj_abij {
  d: path("M8 8H6v8h4l4 4v-6m0-6V4l-2 2");
}
</style><g class="nrj6p8qat"><path class="axcf-wb4p"/><path class="vkrj_abij"/></g>`,
		"fallback": "coolicons:volume-off-duocolor-sharp",
	});
}

export default Component;
