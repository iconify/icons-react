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
		"content": `<style>.ta57obbst {
  fill: currentColor;
  d: path("M24 11.01L17 11v11h7zM23 20h-5v-7h5zM22 2H0v16h9v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2zM11.97 9L11 6l-.97 3H7l2.47 1.76l-.94 2.91l2.47-1.8l2.47 1.8l-.94-2.91L15 9z");
}
</style><path class="ta57obbst"/>`,
		"fallback": "ic:sharp-important-devices",
	});
}

export default Component;
