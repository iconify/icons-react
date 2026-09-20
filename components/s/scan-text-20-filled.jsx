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
		"content": `<style>.y4v2e8hnj {
  fill: currentColor;
  d: path("M4.5 3.5a1 1 0 0 0-1 1v2.25a.75.75 0 0 1-1.5 0V4.5A2.5 2.5 0 0 1 4.5 2h2.25a.75.75 0 0 1 0 1.5zm0 13a1 1 0 0 1-1-1v-2.25a.75.75 0 0 0-1.5 0v2.25A2.5 2.5 0 0 0 4.5 18h2.25a.75.75 0 0 0 0-1.5zm12-12a1 1 0 0 0-1-1h-2.25a.75.75 0 0 1 0-1.5h2.25A2.5 2.5 0 0 1 18 4.5v2.25a.75.75 0 0 1-1.5 0zm-1 12a1 1 0 0 0 1-1v-2.25a.75.75 0 0 1 1.5 0v2.25a2.5 2.5 0 0 1-2.5 2.5h-2.25a.75.75 0 0 1 0-1.5zM6 6.75A.75.75 0 0 1 6.75 6h6.5a.75.75 0 0 1 0 1.5h-6.5A.75.75 0 0 1 6 6.75M6.75 9a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 12.75a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75");
}
</style><path class="y4v2e8hnj"/>`,
		"fallback": "fluent:scan-text-20-filled",
	});
}

export default Component;
