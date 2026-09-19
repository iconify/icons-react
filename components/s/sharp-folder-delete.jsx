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
		"content": `<style>.qotui7jgj {
  fill: currentColor;
  d: path("M22 6v14H2V4h8l2 2zm-5.5 4V9h-2v1H12v1.5h1V17h5v-5.5h1V10zm0 5.5h-2v-4h2z");
}
</style><path class="qotui7jgj"/>`,
		"fallback": "ic:sharp-folder-delete",
	});
}

export default Component;
