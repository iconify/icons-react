import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.n2zg2v3cj {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM6 13h4v-2H6zm0-3h4V6H6zm7-4h-2v4h2zm0 5h-2v2h.5a1.5 1.5 0 0 0 1.5-1.5zm-8.5 2H5V5h8v-.5A1.5 1.5 0 0 0 11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13");
}
</style><path class="n2zg2v3cj"/>`,
		"fallback": "fluent:table-freeze-column-and-row-16-regular",
	});
}

export default Component;
