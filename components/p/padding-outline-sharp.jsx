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
		"content": `<style>.c_jzdbcmb {
  fill: currentColor;
  d: path("M7.346 8.885h1.539V7.346H7.346zm3.885 0h1.538V7.346h-1.538zm3.885 0h1.538V7.346h-1.538zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="c_jzdbcmb"/>`,
		"fallback": "material-symbols-light:padding-outline-sharp",
	});
}

export default Component;
