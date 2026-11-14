import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.r7ujpbc7b {
  fill: currentColor;
  d: path("M3.75 12a.75.75 0 0 1 .75.75v1c0 .966.784 1.75 1.75 1.75h1a.75.75 0 0 1 0 1.5h-1A3.25 3.25 0 0 1 3 13.75v-1a.75.75 0 0 1 .75-.75m12.5 0a.75.75 0 0 1 .75.75v1A3.25 3.25 0 0 1 13.75 17h-1a.75.75 0 0 1 0-1.5h1a1.75 1.75 0 0 0 1.75-1.75v-1a.75.75 0 0 1 .75-.75M10 7.5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M10 9a1 1 0 1 0 0 2a1 1 0 0 0 0-2M7.25 3a.75.75 0 0 1 0 1.5h-1A1.75 1.75 0 0 0 4.5 6.25v1a.75.75 0 0 1-1.5 0v-1A3.25 3.25 0 0 1 6.25 3zm6.5 0A3.25 3.25 0 0 1 17 6.25v1a.75.75 0 0 1-1.5 0v-1a1.75 1.75 0 0 0-1.75-1.75h-1a.75.75 0 0 1 0-1.5zm-7 2.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2");
}
</style><path class="r7ujpbc7b"/>`,
		"fallback": "fluent:visual-search-20-filled",
	});
}

export default Component;
