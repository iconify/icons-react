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
		"content": `<style>.jfq5m4b5k {
  fill: currentColor;
  d: path("M3 15.327V3h14.27v1H4v11.327zM11.52 21v-2H6.77V6.77h15.25V19h-4.77v2zm-3.75-3h13.25V7.77H7.77zm6.634-5.116");
}
</style><path class="jfq5m4b5k"/>`,
		"fallback": "material-symbols-light:tv-displays-outline-sharp",
	});
}

export default Component;
