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
		"content": `<style>.l0yp1jb4e {
  fill: currentColor;
  d: path("M18.71 3H5.29L3 5.79V21h18V5.79zM12 17.5L6.5 12H10v-2h4v2h3.5zM5.12 5l.81-1h12l.94 1z");
}
</style><path class="l0yp1jb4e"/>`,
		"fallback": "ic:sharp-archive",
	});
}

export default Component;
