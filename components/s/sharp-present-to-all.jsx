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
		"content": `<style>.hi2xc8bop {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-2 16.02H3V4.98h18zM10 12H8l4-4l4 4h-2v4h-4z");
}
</style><path class="hi2xc8bop"/>`,
		"fallback": "ic:sharp-present-to-all",
	});
}

export default Component;
