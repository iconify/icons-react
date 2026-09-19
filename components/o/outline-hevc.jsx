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
		"content": `<style>.o1ps1nbzt {
  fill: currentColor;
  d: path("M5.5 11h-1V9H3v6h1.5v-2.5h1V15H7V9H5.5zM21 11v-1c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-1h-1.5v.5h-1v-3h1v.5zm-6.75 2.5L13.5 9H12l1 6h2.5l1-6H15zM8 9v6h3.5v-1.5h-2v-1h2V11h-2v-.5h2V9z");
}
</style><path class="o1ps1nbzt"/>`,
		"fallback": "ic:outline-hevc",
	});
}

export default Component;
