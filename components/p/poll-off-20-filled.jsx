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
		"content": `<style>.cdhgk-bjx {
  fill: currentColor;
  d: path("M8 8.707V16a2 2 0 1 0 4 0v-3.293l2 2V16a2 2 0 0 0 3.016 1.723l.13.13a.5.5 0 0 0 .708-.707l-15-15a.5.5 0 1 0-.708.708zM14 8v3.879l4 4V8a2 2 0 1 0-4 0M8 5.879l4 4V4a2 2 0 1 0-4 0zM4 10a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2");
}
</style><path class="cdhgk-bjx"/>`,
		"fallback": "fluent:poll-off-20-filled",
	});
}

export default Component;
