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
		"content": `<style>.cbbods3vk {
  d: path("M3 3h18v18H3Zm4 4h10M7 11h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vgl54wu5w {
  stroke-opacity: 0.4;
  d: path("m12 18l6-6m-1 6l1-1");
}
</style><g class="nrj6p8qat"><path class="vgl54wu5w"/><path class="cbbods3vk"/></g>`,
		"fallback": "coolicons:textarea-duocolor-sharp",
	});
}

export default Component;
