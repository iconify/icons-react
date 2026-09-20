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
		"content": `<style>.a-w_1db2r {
  fill: currentColor;
  d: path("M4.616 17q-.691 0-1.153-.462T3 15.385V4.615q0-.69.463-1.153T4.615 3h14.77q.69 0 1.152.462T21 4.615v13.518q0 .54-.497.745t-.876-.174L17.923 17z");
}
</style><path class="a-w_1db2r"/>`,
		"fallback": "material-symbols-light:mode-comment-rounded",
	});
}

export default Component;
