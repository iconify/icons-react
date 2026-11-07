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
		"content": `<style>.j0a5zmbid {
  fill: currentColor;
  d: path("M14 2a5 5 0 0 1 5 5v9h1a2 2 0 0 1 2 2v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V9H4a2 2 0 0 1-2-2V5a3 3 0 0 1 3-3ZM6 5a1 1 0 0 0-2 0v1a1 1 0 0 0 2 0Zm9 2h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m0 4h-5a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2m4 9a1 1 0 0 0 0-2h-6a1 1 0 0 0 0 2Z");
}
</style><path class="j0a5zmbid"/>`,
		"fallback": "coolicons:scroll-text-fill-round",
	});
}

export default Component;
