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
		"content": `<style>.g-q59iq9r {
  fill: currentColor;
  d: path("M6 16v-3a1 1 0 0 1 1-1h3V9a1 1 0 0 1 1-1h3V5a1 1 0 0 1 1-1h4a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-2a1 1 0 0 1 1-1Z");
}
</style><path class="g-q59iq9r"/>`,
		"fallback": "coolicons:stairs-fill",
	});
}

export default Component;
