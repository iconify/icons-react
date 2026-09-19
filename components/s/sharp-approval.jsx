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
		"content": `<style>.oxrb5nb_m {
  fill: currentColor;
  d: path("M4 14v8h16v-8zm14 4H6v-2h12zM12 2C9.24 2 7 4.24 7 7l5 7l5-7c0-2.76-2.24-5-5-5");
}
</style><path class="oxrb5nb_m"/>`,
		"fallback": "ic:sharp-approval",
	});
}

export default Component;
