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
		"content": `<style>.pz-w2qb-x {
  fill: currentColor;
  d: path("M3 5H1v18h18v-2H3zm11 10h2V5h-4v2h2zm9-14H5v18h18zm-2 16H7V3h14z");
}
</style><path class="pz-w2qb-x"/>`,
		"fallback": "ic:sharp-filter-1",
	});
}

export default Component;
