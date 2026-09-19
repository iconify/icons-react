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
		"content": `<style>.tfu6ngbld {
  fill: currentColor;
  d: path("m18.36 9l.6 3H5.04l.6-3zM20 4H4v2h16zm0 3H4l-1 5v2h1v6h10v-6h4v6h2v-6h1v-2zM6 18v-4h6v4z");
}
</style><path class="tfu6ngbld"/>`,
		"fallback": "ic:outline-store",
	});
}

export default Component;
