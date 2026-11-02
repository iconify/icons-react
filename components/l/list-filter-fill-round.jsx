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
		"content": `<style>.m538sebkk {
  fill: currentColor;
  d: path("M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m3 6h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m3 6h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><path class="m538sebkk"/>`,
		"fallback": "coolicons:list-filter-fill-round",
	});
}

export default Component;
