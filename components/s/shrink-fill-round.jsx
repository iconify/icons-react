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
		"content": `<style>.wrgo91_7r {
  fill: currentColor;
  d: path("M14 11a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2Zm-4 2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-5H4a1 1 0 0 1 0-2Z");
}
</style><path class="wrgo91_7r"/>`,
		"fallback": "coolicons:shrink-fill-round",
	});
}

export default Component;
