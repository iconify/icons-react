import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tn7bbkcbo {
  fill: currentColor;
  d: path("M23.5 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0zM11 3h5a1 1 0 0 1 1 1v5.5h-6zM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3M3 17v-6h6.5v6zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25M17 24a1 1 0 0 1-1 1h-5v-6.5h6zm-6-13v6h6v-6z");
}
</style><path class="tn7bbkcbo"/>`,
		"fallback": "fluent:table-stack-right-28-filled",
	});
}

export default Component;
