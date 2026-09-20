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
		"content": `<style>.abr759vxj {
  fill: currentColor;
  d: path("M6.73 16.616V7.385h1v9.23zm10.54 0L10.345 12l6.923-4.615zm-1-1.866v-5.5L12.138 12z");
}
</style><path class="abr759vxj"/>`,
		"fallback": "material-symbols-light:skip-previous-outline-sharp",
	});
}

export default Component;
