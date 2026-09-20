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
		"content": `<style>.jj8b1pbnj {
  fill: currentColor;
  d: path("M3 20V7h6V4h6v3h6v13zm7-13h4V5h-4zm0 10.077l5.577-3.577L10 9.923z");
}
</style><path class="jj8b1pbnj"/>`,
		"fallback": "material-symbols-light:shop-sharp",
	});
}

export default Component;
