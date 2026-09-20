import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j-_h3o5ha {
  fill: currentColor;
  d: path("M16 21H5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v11zm-1-2v-2q0-.825.588-1.412T17 15h2V5H5v14zm-4-3h2v-6h3V8H8v2h3zm-6 3V5z");
}
</style><path class="j-_h3o5ha"/>`,
		"fallback": "material-symbols:sticky-note-outline",
	});
}

export default Component;
