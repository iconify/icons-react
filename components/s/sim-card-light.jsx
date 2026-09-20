import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r2vv-nzek {
  fill: currentColor;
  d: path("m212.24 83.76l-56-56A6 6 0 0 0 152 26H56a14 14 0 0 0-14 14v176a14 14 0 0 0 14 14h144a14 14 0 0 0 14-14V88a6 6 0 0 0-1.76-4.24M202 216a2 2 0 0 1-2 2H56a2 2 0 0 1-2-2V40a2 2 0 0 1 2-2h93.52L202 90.49ZM74 120v72a6 6 0 0 0 6 6h96a6 6 0 0 0 6-6v-72a6 6 0 0 0-6-6H80a6 6 0 0 0-6 6m12 6h84v60h-20v-34a6 6 0 0 0-12 0v34h-20v-34a6 6 0 0 0-12 0v34H86Z");
}
</style><path class="r2vv-nzek"/>`,
		"fallback": "ph:sim-card-light",
	});
}

export default Component;
