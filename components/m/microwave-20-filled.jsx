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
		"content": `<style>.gri40olda {
  fill: currentColor;
  d: path("M15 4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zM5.5 6A1.5 1.5 0 0 0 4 7.5v5l.008.153A1.5 1.5 0 0 0 5.5 14h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 12.5 6zm7 1a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.49-.4L5 12.5v-5a.5.5 0 0 1 .5-.5zm-1 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0v-3a.5.5 0 0 0-.5-.5M16 9.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-3a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="gri40olda"/>`,
		"fallback": "fluent:microwave-20-filled",
	});
}

export default Component;
