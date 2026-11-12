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
		"content": `<style>.jcebhfbuv {
  fill: currentColor;
  d: path("M3 3h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m8 9a6 6 0 1 1 12 0a6 6 0 0 1-12 0m-8-4h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m10 4a4 4 0 1 0 8 0a4 4 0 0 0-8 0m3-2a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1ZM3 18h5a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="jcebhfbuv"/>`,
		"fallback": "coolicons:logs-fill",
	});
}

export default Component;
