import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t6fsvcb_i {
  fill: currentColor;
  d: path("M11 2a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-3v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-3H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3V4a2 2 0 0 1 2-2zM8 16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3H8zM4 8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3V8zm4 4h4V8H8zm5 0h3a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-3zM9 3a1 1 0 0 0-1 1v3h4V4a1 1 0 0 0-1-1z");
}
</style><path class="t6fsvcb_i"/>`,
		"fallback": "fluent:table-cell-cross-20-regular",
	});
}

export default Component;
