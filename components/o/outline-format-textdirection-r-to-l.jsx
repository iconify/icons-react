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
		"content": `<style>.ccsf30bnx {
  fill: currentColor;
  d: path("M10 4v4c-1.1 0-2-.9-2-2s.9-2 2-2m8-2h-8C7.79 2 6 3.79 6 6s1.79 4 4 4v5h2V4h2v11h2V4h2zM8 14l-4 4l4 4v-3h12v-2H8z");
}
</style><path class="ccsf30bnx"/>`,
		"fallback": "ic:outline-format-textdirection-r-to-l",
	});
}

export default Component;
