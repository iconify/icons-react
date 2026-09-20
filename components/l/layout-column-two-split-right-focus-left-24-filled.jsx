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
		"content": `<style>.kucxl_qmy {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zm9-1.75v6.75h7.5v-5a1.75 1.75 0 0 0-1.75-1.75zm0 8.25v6.75h5.75a1.75 1.75 0 0 0 1.75-1.75v-5z");
}
</style><path class="kucxl_qmy"/>`,
		"fallback": "fluent:layout-column-two-split-right-focus-left-24-filled",
	});
}

export default Component;
