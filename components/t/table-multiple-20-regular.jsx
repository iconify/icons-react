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
		"content": `<style>.bmgcmk0so {
  fill: currentColor;
  d: path("M15.991 5.759A3 3 0 0 1 17 8v4a5 5 0 0 1-5 5H8c-.892 0-1.692-.39-2.241-1.008Q5.879 16 6 16h6a4 4 0 0 0 4-4V6q0-.121-.008-.241m-3.837-2.755A3 3 0 0 1 15 6v6a3 3 0 0 1-3 3H6a3 3 0 0 1-2.996-2.846L3 12V6a3 3 0 0 1 3-3h6zM4 11v1l.01.204A2 2 0 0 0 6 14h1v-3zm4 0v3h2v-3zm3 0v3h1a2 2 0 0 0 2-2v-1zm-7-1h3V8H4zm4 0h2V8H8zm3 0h3V8h-3zM6 4a2 2 0 0 0-2 2v1h3V4zm2 3h2V4H8zm3 0h3V6a2 2 0 0 0-1.796-1.99L12 4h-1z");
}
</style><path class="bmgcmk0so"/>`,
		"fallback": "fluent:table-multiple-20-regular",
	});
}

export default Component;
