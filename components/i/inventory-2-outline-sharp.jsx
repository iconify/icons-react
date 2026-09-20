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
		"content": `<style>.wnid8ibgp {
  fill: currentColor;
  d: path("M4 21V8.385H3V3h18v5.385h-1V21zm1-1h14V8.385H5zM4 7.385h16V4H4zm5.385 5.48h5.23V12h-5.23zM12 14.193");
}
</style><path class="wnid8ibgp"/>`,
		"fallback": "material-symbols-light:inventory-2-outline-sharp",
	});
}

export default Component;
