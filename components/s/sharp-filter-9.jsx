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
		"content": `<style>.fruckybzo {
  fill: currentColor;
  d: path("M3 5H1v18h18v-2H3zm20-4H5v18h18zm-2 16H7V3h14zM17 5h-6v6h4v2h-4v2h6zm-2 4h-2V7h2z");
}
</style><path class="fruckybzo"/>`,
		"fallback": "ic:sharp-filter-9",
	});
}

export default Component;
