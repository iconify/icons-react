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
		"content": `<style>.cfrj5tb9l {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 9l12 4l-4 1l3 3l-3 3l-3-3l-1 4Z");
}

.ft5dv1b6b {
  fill: none;
}

.q4zaa2bdd {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6V3h3m12 0h3v3M6 21H3v-3m7-15h4M3 14v-4m6-1l12 4l-4 1l3 3l-3 3l-3-3l-1 4z");
}
</style><g class="ft5dv1b6b"><path class="cfrj5tb9l"/><path class="q4zaa2bdd"/></g>`,
		"fallback": "coolicons:square-dashed-cursor-duotone-sharp",
	});
}

export default Component;
