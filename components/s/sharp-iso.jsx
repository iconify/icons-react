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
		"content": `<style>.cl3e3t-5y {
  fill: currentColor;
  d: path("M21 3H3v18h18zM5.5 7.5h2v-2H9v2h2V9H9v2H7.5V9h-2zM19 19H5L19 5zm-2-2v-1.5h-5V17z");
}
</style><path class="cl3e3t-5y"/>`,
		"fallback": "ic:sharp-iso",
	});
}

export default Component;
