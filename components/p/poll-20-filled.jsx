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
		"content": `<style>.qp8zwo5ne {
  fill: currentColor;
  d: path("M10 2a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V4a2 2 0 0 0-2-2m-6 8a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2m12-4a2 2 0 0 0-2 2v8a2 2 0 1 0 4 0V8a2 2 0 0 0-2-2");
}
</style><path class="qp8zwo5ne"/>`,
		"fallback": "fluent:poll-20-filled",
	});
}

export default Component;
