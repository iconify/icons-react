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
		"content": `<style>.vezow1_wt {
  fill: currentColor;
  d: path("M9.385 16.808h8v-2h-8zM4 20V4h16v16zm1-1h14V5H5zM5 5v14z");
}
</style><path class="vezow1_wt"/>`,
		"fallback": "material-symbols-light:position-bottom-right-outline-sharp",
	});
}

export default Component;
