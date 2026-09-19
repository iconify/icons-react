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
		"content": `<style>.vm2d60b4v {
  fill: currentColor;
  d: path("m18 12l4-4l-4-4v3H3v2h15zM6 12l-4 4l4 4v-3h15v-2H6z");
}
</style><path class="vm2d60b4v"/>`,
		"fallback": "ic:sharp-sync-alt",
	});
}

export default Component;
