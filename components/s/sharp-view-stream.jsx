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
		"content": `<style>.d1jb6ibdc {
  fill: currentColor;
  d: path("M3 19v-6h18v6zM3 5v6h18V5z");
}
</style><path class="d1jb6ibdc"/>`,
		"fallback": "ic:sharp-view-stream",
	});
}

export default Component;
