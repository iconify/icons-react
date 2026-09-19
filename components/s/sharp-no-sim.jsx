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
		"content": `<style>.x2yexeflv {
  fill: currentColor;
  d: path("M3.79 3.74L2.38 5.15l2.74 2.74l-.12.12V21h13.27l1.58 1.62l1.41-1.41zM19 16.11V3h-8.99L7.95 5.06z");
}
</style><path class="x2yexeflv"/>`,
		"fallback": "ic:sharp-no-sim",
	});
}

export default Component;
