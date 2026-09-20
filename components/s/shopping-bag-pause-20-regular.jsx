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
		"content": `<style>.o6yg13btw {
  fill: currentColor;
  d: path("M10 2.5a2.5 2.5 0 0 0-4 2V6H5a1 1 0 0 0-1 1v8a3 3 0 0 0 3 3h3.257a5.5 5.5 0 0 1-.657-1H7a2 2 0 0 1-2-2V7h6v3.257a5.5 5.5 0 0 1 1-.657V7h3v2.022q.516.047 1 .185V7a1 1 0 0 0-1-1h-1V4.5a2.5 2.5 0 0 0-4-2m-3 2a1.5 1.5 0 1 1 3 0V6H7zm3.667-1.248A1.5 1.5 0 0 1 13 4.5V6h-2V4.5c0-.454-.121-.88-.333-1.248M19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M13 12a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5m3 0a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0v-4a.5.5 0 0 0-.5-.5");
}
</style><path class="o6yg13btw"/>`,
		"fallback": "fluent:shopping-bag-pause-20-regular",
	});
}

export default Component;
