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
		"content": `<style>.orql_mwti {
  fill: currentColor;
  d: path("M19 11h-8v6h8zm4 10V3H1v18zm-2-1.98H3V4.97h18z");
}
</style><path class="orql_mwti"/>`,
		"fallback": "ic:sharp-picture-in-picture-alt",
	});
}

export default Component;
