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
		"content": `<style>.bvh2kac6x {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 10a4 4 0 0 0 4-4V5a2 2 0 1 1 4 0v3a2 2 0 0 0 2 2h1a3 3 0 0 1 3 3v1l-1 5c-.233 1.163-1.488 2-3 2H9a2 2 0 0 1-2-2m0-9H5a2 2 0 0 0-2 2v7a2 2 0 1 0 4 0z");
}

.ft5dv1b6b {
  fill: none;
}

.zozz3kgrq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 10a4 4 0 0 0 4-4V5a2 2 0 1 1 4 0v3a2 2 0 0 0 2 2h1a3 3 0 0 1 3 3v1l-1 5c-.233 1.163-1.488 2-3 2H9a2 2 0 0 1-2-2a2 2 0 1 1-4 0v-7a2 2 0 0 1 2-2Z");
}
</style><g class="ft5dv1b6b"><path class="zozz3kgrq"/><path class="bvh2kac6x"/></g>`,
		"fallback": "coolicons:thumbs-up-duotone-round",
	});
}

export default Component;
