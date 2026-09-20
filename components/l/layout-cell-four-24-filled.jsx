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
		"content": `<style>.xo33tgofm {
  fill: currentColor;
  d: path("M17.75 21h-5v-8.25H21v5A3.25 3.25 0 0 1 17.75 21M21 11.25h-8.25V3h5A3.25 3.25 0 0 1 21 6.25zm-9.75 0V3h-5A3.25 3.25 0 0 0 3 6.25v5zM3 12.75v5A3.25 3.25 0 0 0 6.25 21h5v-8.25z");
}
</style><path class="xo33tgofm"/>`,
		"fallback": "fluent:layout-cell-four-24-filled",
	});
}

export default Component;
