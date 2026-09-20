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
		"content": `<style>.wgu4xpbth {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM3 4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5zM5 7a2 2 0 1 1 4 0a2 2 0 0 1-4 0m2-3a3 3 0 1 0 1.738 5.445l2.408 2.409a.5.5 0 0 0 .708-.708L9.445 8.738A3 3 0 0 0 7 4");
}
</style><path class="wgu4xpbth"/>`,
		"fallback": "fluent:search-square-16-regular",
	});
}

export default Component;
