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
		"content": `<style>.od0fzxk3x {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h11.5A3.25 3.25 0 0 1 21 6.25v11.5A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM6.25 4.5A1.75 1.75 0 0 0 4.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h5v-15zm11.5 15a1.75 1.75 0 0 0 1.75-1.75v-5h-6.75v6.75zm1.75-8.25v-5a1.75 1.75 0 0 0-1.75-1.75h-5v6.75z");
}
</style><path class="od0fzxk3x"/>`,
		"fallback": "fluent:layout-column-two-split-right-24-regular",
	});
}

export default Component;
