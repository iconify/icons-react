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
		"content": `<style>.j1vuwrr9x {
  fill: currentColor;
  d: path("M19 12h-2v3h-3v2h5zM7 9h3V7H5v5h2zm16-6H1v18h22zm-2 16.01H3V4.99h18z");
}
</style><path class="j1vuwrr9x"/>`,
		"fallback": "ic:sharp-aspect-ratio",
	});
}

export default Component;
