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
		"content": `<style>.o3pff5ccc {
  fill: currentColor;
  d: path("M2 17a1 1 0 0 1 1-1h3v-3a1 1 0 0 1 1-1h3V9a1 1 0 0 1 1-1h3V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1Z");
}
</style><path class="o3pff5ccc"/>`,
		"fallback": "coolicons:stairs-fill-sharp",
	});
}

export default Component;
