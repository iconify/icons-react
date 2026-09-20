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
		"content": `<style>.ipcqqvbxc {
  fill: currentColor;
  d: path("M5 19h9v-5h5V5H5zm0 2q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v10l-6 6zm2-7v-2h5v2zm0-4V8h10v2zm-2 9V5z");
}
</style><path class="ipcqqvbxc"/>`,
		"fallback": "material-symbols:sticky-note-2-outline",
	});
}

export default Component;
