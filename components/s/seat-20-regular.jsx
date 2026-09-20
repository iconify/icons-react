import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qb_svbj3b {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v9a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a3 3 0 0 0-3-3zm10 6.5a2.5 2.5 0 0 0-3.62.674A3 3 0 0 0 10 9c-.97 0-1.832.46-2.38 1.174A2.5 2.5 0 0 0 4 9.5V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM12 12v4H8v-4a2 2 0 1 1 4 0m1 4v-4.5a1.5 1.5 0 0 1 3 0V15a1 1 0 0 1-1 1zm-9-1v-3.5a1.5 1.5 0 0 1 3 0V16H5a1 1 0 0 1-1-1");
}
</style><path class="qb_svbj3b"/>`,
		"fallback": "fluent:seat-20-regular",
	});
}

export default Component;
