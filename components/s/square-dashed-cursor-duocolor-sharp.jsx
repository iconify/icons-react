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
		"content": `<style>.jpt160bdm {
  stroke-opacity: 0.4;
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4z");
}

.m16i06_lb {
  d: path("M3 6V3h3m12 0h3v3M6 21H3v-3m7-15h4M3 14v-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jpt160bdm"/><path class="m16i06_lb"/></g>`,
		"fallback": "coolicons:square-dashed-cursor-duocolor-sharp",
	});
}

export default Component;
