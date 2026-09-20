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
		"content": `<style>.bjf63ft5o {
  fill: currentColor;
  d: path("M15.75 14.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM2 8.25A3.25 3.25 0 0 1 5.25 5h13.5A3.25 3.25 0 0 1 22 8.25v7.5A3.25 3.25 0 0 1 18.75 19H5.25A3.25 3.25 0 0 1 2 15.75zM20.5 9.5V8.25a1.75 1.75 0 0 0-1.75-1.75H5.25A1.75 1.75 0 0 0 3.5 8.25V9.5zM3.5 11v4.75c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V11z");
}
</style><path class="bjf63ft5o"/>`,
		"fallback": "fluent:payment-24-regular",
	});
}

export default Component;
