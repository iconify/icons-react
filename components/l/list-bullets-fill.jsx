import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.olpzisjsd {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M68 188a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-48a12 12 0 1 1 12-12a12 12 0 0 1-12 12m124 92h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16m0-48h-88a8 8 0 0 1 0-16h88a8 8 0 0 1 0 16");
}
</style><path class="olpzisjsd"/>`,
		"fallback": "ph:list-bullets-fill",
	});
}

export default Component;
