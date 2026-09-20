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
		"content": `<style>.h4i1wwbal {
  fill: currentColor;
  d: path("M10 2a2 2 0 0 0-.496 3.938L9.5 6v3.5a.5.5 0 0 0 1 0V6l-.004-.062A2 2 0 0 0 10 2M9 4a1 1 0 1 1 2 0a1 1 0 0 1-2 0M4 4a1 1 0 0 0-1 1v11a1 1 0 1 0 2 0v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4a1 1 0 1 0 2 0v-3.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 0 .5-.5V5a1 1 0 1 0-2 0v4a.5.5 0 0 1-.5.5H12a.5.5 0 0 1 0-1h2V5a2 2 0 1 1 4 0v6.5a1.5 1.5 0 0 1-1.5 1.5H12v3a2 2 0 1 1-4 0v-3.5H6V16a2 2 0 1 1-4 0V5a2 2 0 1 1 4 0v3.5h2a.5.5 0 0 1 0 1H5.5A.5.5 0 0 1 5 9V5a1 1 0 0 0-1-1");
}
</style><path class="h4i1wwbal"/>`,
		"fallback": "fluent:transmission-20-regular",
	});
}

export default Component;
