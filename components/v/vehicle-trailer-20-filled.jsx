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
		"content": `<style>.tej27i2zk {
  fill: currentColor;
  d: path("M13.154 3.004A3 3 0 0 1 16 6v8h2v-1.5a.5.5 0 0 1 1 0v4a.5.5 0 0 1-1 0V15H8.95a2.501 2.501 0 0 1-4.9 0H4a3 3 0 0 1-3-3a9 9 0 0 1 9-9h3zM6.5 13a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M10 6a1 1 0 0 0-1 1v2l.005.103A1 1 0 0 0 10 10h2a1 1 0 0 0 1-1V7a1 1 0 0 0-.898-.995L12 6z");
}
</style><path class="tej27i2zk"/>`,
		"fallback": "fluent:vehicle-trailer-20-filled",
	});
}

export default Component;
