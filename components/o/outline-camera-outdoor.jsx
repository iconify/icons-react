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
		"content": `<style>.lyl7zebob {
  fill: currentColor;
  d: path("M18 13c0-.55-.45-1-1-1h-4c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1l2 1.06v-4.12L18 14zM12 3L4 9v12h16v-2H6v-9l6-4.5l6 4.5v1h2V9z");
}
</style><path class="lyl7zebob"/>`,
		"fallback": "ic:outline-camera-outdoor",
	});
}

export default Component;
