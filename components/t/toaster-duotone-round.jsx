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
		"content": `<style>.bwvuixbrw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 9h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2");
}

.ft5dv1b6b {
  fill: none;
}

.o3w5dkbaw {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 11a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm14 2v4M6 9V5a2 2 0 1 1 4 0v4m4 0V5a2 2 0 1 1 4 0v4");
}
</style><g class="ft5dv1b6b"><path class="bwvuixbrw"/><path class="o3w5dkbaw"/></g>`,
		"fallback": "coolicons:toaster-duotone-round",
	});
}

export default Component;
