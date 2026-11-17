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
		"content": `<style>.sekwasb5k {
  fill: currentColor;
  d: path("M15 4a1 1 0 0 1 0 2h-2v2h1a3 3 0 0 1 3 3h3v-1a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0v-1h-3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3H4v1a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0v1h3a3 3 0 0 1 3-3h1V6H9a1 1 0 0 1 0-2Z");
}
</style><path class="sekwasb5k"/>`,
		"fallback": "coolicons:valve-fill-round",
	});
}

export default Component;
