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
		"content": `<style>.l8lkdj5vf {
  fill: currentColor;
  d: path("m15.95 22l-4.25-4.25l1.4-1.4l2.85 2.85l5.65-5.65l1.4 1.4zM12 11l8-5H4zm0 2L4 8v10h5.15l2 2H2V4h20v6.35l-2 2V8zm0 0");
}
</style><path class="l8lkdj5vf"/>`,
		"fallback": "material-symbols:mark-email-read-outline-sharp",
	});
}

export default Component;
