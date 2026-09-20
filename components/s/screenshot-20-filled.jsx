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
		"content": `<style>.xr2i9bw9e {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 5h2a.5.5 0 0 1 0 1zM6 13.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 1 0 1h-2A1.5 1.5 0 0 1 5 13.5v-2a.5.5 0 0 1 1 0zM13.5 6h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 15 6.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 0-.5-.5m.5 7.5v-2a.5.5 0 0 1 1 0v2a1.5 1.5 0 0 1-1.5 1.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 0 .5-.5");
}
</style><path class="xr2i9bw9e"/>`,
		"fallback": "fluent:screenshot-20-filled",
	});
}

export default Component;
