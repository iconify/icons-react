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
		"content": `<style>.pusq2eb7r {
  fill: currentColor;
  d: path("M13 2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H9v2h9v-4h-1a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-3H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM9.707 6.707a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 6 10h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 10 8H8.414Z");
}
</style><path class="pusq2eb7r"/>`,
		"fallback": "coolicons:wallbox-fill-sharp",
	});
}

export default Component;
