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
		"content": `<style>.dwexhb8xi {
  fill: currentColor;
  d: path("M17 5v1h1a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3h-1v1a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V6.414L4.293 4.707a2 2 0 0 1-.424-.635c-.286-.69-.163-1.561.549-1.932c.18-.093.379-.141.582-.14h9a3 3 0 0 1 3 3m0 7h1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1Zm1 8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2Z");
}
</style><path class="dwexhb8xi"/>`,
		"fallback": "coolicons:kettle-fill",
	});
}

export default Component;
