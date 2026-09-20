import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kk44ilbvo {
  fill: currentColor;
  d: path("M10.25 8A6.25 6.25 0 0 0 4 14.25v19.5A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75v-19.5A6.25 6.25 0 0 0 37.75 8zM6.5 14.25a3.75 3.75 0 0 1 3.75-3.75h27.5a3.75 3.75 0 0 1 3.75 3.75v.89l-17.498 9.21L6.5 15.063zm0 3.644l16.914 8.974a1.25 1.25 0 0 0 1.168.002L41.5 17.965V33.75a3.75 3.75 0 0 1-3.75 3.75h-27.5a3.75 3.75 0 0 1-3.75-3.75z");
}
</style><path class="kk44ilbvo"/>`,
		"fallback": "fluent:mail-48-regular",
	});
}

export default Component;
