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
		"content": `<style>.mpm928bxl {
  fill: currentColor;
  d: path("m12 21l-2.29-3.5H4.615q-.666 0-1.14-.475T3 15.886V4.615q0-.666.475-1.14T4.615 3h14.77q.666 0 1.14.475T21 4.615v11.27q0 .666-.475 1.14t-1.14.475H14.29z");
}
</style><path class="mpm928bxl"/>`,
		"fallback": "material-symbols-light:tooltip",
	});
}

export default Component;
