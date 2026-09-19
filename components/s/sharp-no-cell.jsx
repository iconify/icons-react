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
		"content": `<style>.qfo-qsbqe {
  fill: currentColor;
  d: path("M21.19 21.19L2.81 2.81L1.39 4.22L5 7.83V23h14v-1.17l.78.78zM7 18V9.83L15.17 18zM8.83 6L5 2.17V1h14v15.17l-2-2V6z");
}
</style><path class="qfo-qsbqe"/>`,
		"fallback": "ic:sharp-no-cell",
	});
}

export default Component;
