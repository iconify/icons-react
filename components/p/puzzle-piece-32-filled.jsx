import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.pvwtl1bcu {
  fill: currentColor;
  d: path("M17 2a3 3 0 0 0-3 3v1H9.75A2.75 2.75 0 0 0 7 8.75V13H6a3 3 0 1 0 0 6h1v4.25A2.75 2.75 0 0 0 9.75 26H14v1a3 3 0 1 0 6 0v-1h4.25A2.75 2.75 0 0 0 27 23.25V19h-2a3 3 0 1 1 0-6h2V8.75A2.75 2.75 0 0 0 24.25 6H20V5a3 3 0 0 0-3-3");
}
</style><path class="pvwtl1bcu"/>`,
		"fallback": "fluent:puzzle-piece-32-filled",
	});
}

export default Component;
