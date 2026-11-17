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
		"content": `<style>.d5yc8qb_q {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h11M3 11h6m-6 5h6m5-3a2.828 2.828 0 1 1 4 4a2.828 2.828 0 0 1-4-4m4 4l3 3");
}

.ft5dv1b6b {
  fill: none;
}

.v0dl447bq {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M14 13a2.828 2.828 0 1 1 4 4a2.828 2.828 0 1 1-4-4");
}
</style><g class="ft5dv1b6b"><path class="v0dl447bq"/><path class="d5yc8qb_q"/></g>`,
		"fallback": "coolicons:list-search-duotone",
	});
}

export default Component;
