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
		"content": `<style>.vtv4ecbhn {
  fill: currentColor;
  d: path("M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12m10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6");
}
</style><path class="vtv4ecbhn"/>`,
		"fallback": "ic:sharp-trip-origin",
	});
}

export default Component;
