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
		"content": `<style>.jq93tactv {
  fill: currentColor;
  d: path("M8.404 15.173L11.596 12L8.404 8.827zM16 19h3V5h-3zM5 19h10V5H5zm11 0h3zM4 20V4h16v16z");
}
</style><path class="jq93tactv"/>`,
		"fallback": "material-symbols-light:right-panel-close-outline-sharp",
	});
}

export default Component;
