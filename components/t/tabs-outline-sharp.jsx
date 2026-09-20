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
		"content": `<style>.u1f1qob1f {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14v-7.615H5zm0-8.615h14V5H5zM12 8h6V6h-6zm-7 2.385V5z");
}
</style><path class="u1f1qob1f"/>`,
		"fallback": "material-symbols-light:tabs-outline-sharp",
	});
}

export default Component;
