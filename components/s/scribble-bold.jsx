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
		"content": `<style>.sg6o4pbeu {
  fill: currentColor;
  d: path("M208.5 192.49a10.6 10.6 0 0 0 0 15a12 12 0 0 1-17 17a34.62 34.62 0 0 1 0-49l9.37-9.37a10.63 10.63 0 0 0-15-15l-66.76 66.75a34.63 34.63 0 0 1-49-49l98.76-98.75a10.63 10.63 0 0 0-15-15l-66.76 66.74a34.63 34.63 0 0 1-49-49l41.4-41.35a12 12 0 1 1 17 17L55.1 89.86a10.63 10.63 0 0 0 15 15l66.76-66.75a34.63 34.63 0 1 1 49 49l-98.75 98.75a10.63 10.63 0 0 0 15 15l66.75-66.75a34.63 34.63 0 0 1 49 49Z");
}
</style><path class="sg6o4pbeu"/>`,
		"fallback": "ph:scribble-bold",
	});
}

export default Component;
