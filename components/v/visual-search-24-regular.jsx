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
		"content": `<style>.l66d67m8l {
  fill: currentColor;
  d: path("M17.75 3A3.25 3.25 0 0 1 21 6.25v3a.75.75 0 0 1-1.5 0v-3a1.75 1.75 0 0 0-1.75-1.75h-3a.75.75 0 0 1 0-1.5zM6.25 3A3.25 3.25 0 0 0 3 6.25v3a.75.75 0 0 0 1.5 0v-3c0-.966.784-1.75 1.75-1.75h3a.75.75 0 0 0 0-1.5zm11.5 18A3.25 3.25 0 0 0 21 17.75v-3a.75.75 0 0 0-1.5 0v3a1.75 1.75 0 0 1-1.75 1.75h-3a.75.75 0 0 0 0 1.5zM3 17.75A3.25 3.25 0 0 0 6.25 21h3a.75.75 0 0 0 0-1.5h-3a1.75 1.75 0 0 1-1.75-1.75v-3a.75.75 0 0 0-1.5 0zM12 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-1.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-4.5-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="l66d67m8l"/>`,
		"fallback": "fluent:visual-search-24-regular",
	});
}

export default Component;
