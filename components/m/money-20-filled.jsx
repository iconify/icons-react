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
		"content": `<style>.oy_gl6d7m {
  fill: currentColor;
  d: path("M3.5 4A1.5 1.5 0 0 0 2 5.5v7A1.5 1.5 0 0 0 3.5 14h11a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 14.5 4zM6 5v1a2 2 0 0 1-2 2H3V7h1a1 1 0 0 0 1-1V5zm3 5.75a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5M3 11v-1h1a2 2 0 0 1 2 2v1H5v-1a1 1 0 0 0-1-1zm11 0a1 1 0 0 0-1 1v1h-1v-1a2 2 0 0 1 2-2h1v1zm0-4h1v1h-1a2 2 0 0 1-2-2V5h1v1a1 1 0 0 0 1 1m3 5.5a2.5 2.5 0 0 1-2.5 2.5H4.085A1.5 1.5 0 0 0 5.5 16h9a3.5 3.5 0 0 0 3.5-3.5v-5a1.5 1.5 0 0 0-1-1.415z");
}
</style><path class="oy_gl6d7m"/>`,
		"fallback": "fluent:money-20-filled",
	});
}

export default Component;
