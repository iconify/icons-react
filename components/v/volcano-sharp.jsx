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
		"content": `<style>.vxc0o7b-u {
  fill: currentColor;
  d: path("m3.539 21l3.115-7h3.019l2-5h5.577l3.423 12zM13.885 5.27v-3h1v3zm4.024 1.663l-.688-.689l2.114-2.113l.713.688zm-7.05 0L8.747 4.819l.688-.713l2.114 2.138z");
}
</style><path class="vxc0o7b-u"/>`,
		"fallback": "material-symbols-light:volcano-sharp",
	});
}

export default Component;
