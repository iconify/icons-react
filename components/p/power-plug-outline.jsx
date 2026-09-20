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
		"content": `<style>.ud05c-bzp {
  fill: currentColor;
  d: path("M11.27 19h1.46v-2.08L16 13.65V9.616q0-.231-.192-.424T15.385 9h-6.77q-.23 0-.423.192T8 9.616v4.034l3.27 3.27zm-1 1v-2.654L7 14.077V9.616q0-.672.472-1.144T8.616 8h1.23l-.5.5V4h1v4h3.308V4h1v4.5l-.5-.5h1.23q.672 0 1.144.472T17 9.616v4.461l-3.27 3.27V20zM12 14");
}
</style><path class="ud05c-bzp"/>`,
		"fallback": "material-symbols-light:power-plug-outline",
	});
}

export default Component;
