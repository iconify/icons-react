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
		"content": `<style>.f4dszidnj {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 9h3a5 5 0 0 1 5 5v3a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22h-3a5 5 0 0 1-5-5v-3a5 5 0 0 1 5-5");
}

.ft5dv1b6b {
  fill: none;
}

.s682z5bvd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a3 3 0 0 1 3-3m12 0a3 3 0 0 1 3 3M6 21a3 3 0 0 1-3-3m7-15h4M3 14v-4m7 4a4 4 0 0 1 4-4h3a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4h-3a4 4 0 0 1-4-4Z");
}
</style><g class="ft5dv1b6b"><path class="f4dszidnj"/><path class="s682z5bvd"/></g>`,
		"fallback": "coolicons:square-dashed-square-bottom-right-duotone-round",
	});
}

export default Component;
