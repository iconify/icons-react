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
		"content": `<style>.p807wdd7f {
  fill: currentColor;
  d: path("M21 10V2H1v16h13v-5c0-1.66 1.34-3 3-3zm-10 1L3 6V4l8 5l8-5v2z");
}

.rmmgaxxhs {
  fill: currentColor;
  d: path("M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4z");
}
</style><path class="p807wdd7f"/><path class="rmmgaxxhs"/>`,
		"fallback": "ic:sharp-attach-email",
	});
}

export default Component;
