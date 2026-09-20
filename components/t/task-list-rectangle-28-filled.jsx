import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.e8_p6w1qx {
  fill: currentColor;
  d: path("M22.248 4a3.75 3.75 0 0 1 3.75 3.75v12.5a3.75 3.75 0 0 1-3.75 3.75H5.752a3.75 3.75 0 0 1-3.75-3.75V7.75A3.75 3.75 0 0 1 5.752 4zM11.03 15.22a.75.75 0 0 0-1.06 0L8.5 16.69l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06m2.47.78a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-2.47-6.28a.75.75 0 0 0-1.06 0L8.5 11.19l-.47-.47a.75.75 0 1 0-1.06 1.06l1 1a.75.75 0 0 0 1.06 0l2-2a.75.75 0 0 0 0-1.06m2.47.78a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5z");
}
</style><path class="e8_p6w1qx"/>`,
		"fallback": "fluent:task-list-rectangle-28-filled",
	});
}

export default Component;
