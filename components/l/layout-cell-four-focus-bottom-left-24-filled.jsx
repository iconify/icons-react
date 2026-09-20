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
		"content": `<style>.fgplfn15s {
  fill: currentColor;
  d: path("M6.25 3A3.25 3.25 0 0 0 3 6.25v11.5A3.25 3.25 0 0 0 6.25 21h11.5A3.25 3.25 0 0 0 21 17.75V6.25A3.25 3.25 0 0 0 17.75 3zM4.5 6.25c0-.966.784-1.75 1.75-1.75h5v6.75H4.5zm15 6.5v5a1.75 1.75 0 0 1-1.75 1.75h-5v-6.75zm-6.75-1.5V4.5h5c.966 0 1.75.784 1.75 1.75v5z");
}
</style><path class="fgplfn15s"/>`,
		"fallback": "fluent:layout-cell-four-focus-bottom-left-24-filled",
	});
}

export default Component;
