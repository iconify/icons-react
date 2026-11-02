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
		"content": `<style>.dpfd5x4dp {
  fill: currentColor;
  d: path("M13 5h4c.265 0 .52.105.707.293l3 3a1 1 0 0 1 0 1.414l-3 3A1 1 0 0 1 17 13h-4v8a1 1 0 0 1-2 0v-8H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h7V3a1 1 0 0 1 2 0Z");
}
</style><path class="dpfd5x4dp"/>`,
		"fallback": "coolicons:signpost-fill-sharp",
	});
}

export default Component;
