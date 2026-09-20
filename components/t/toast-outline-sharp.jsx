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
		"content": `<style>.zxs5cdm3x {
  fill: currentColor;
  d: path("M6.5 17.5h11v-1h-11zM4 20V4h16v16zm1-1h14V5H5zm0 0V5z");
}
</style><path class="zxs5cdm3x"/>`,
		"fallback": "material-symbols-light:toast-outline-sharp",
	});
}

export default Component;
