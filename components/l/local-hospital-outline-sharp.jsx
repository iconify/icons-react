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
		"content": `<style>.p8i1v460q {
  fill: currentColor;
  d: path("M11.25 16.5h1.5v-3.75h3.75v-1.5h-3.75V7.5h-1.5v3.75H7.5v1.5h3.75zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="p8i1v460q"/>`,
		"fallback": "material-symbols-light:local-hospital-outline-sharp",
	});
}

export default Component;
