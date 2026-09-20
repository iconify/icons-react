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
		"content": `<style>.h7-rv1l8d {
  fill: currentColor;
  d: path("M4.616 19.462V18H3V5h18v13h-1.616v1.462h-.5L18.37 18H5.675l-.56 1.462z");
}
</style><path class="h7-rv1l8d"/>`,
		"fallback": "material-symbols-light:tv-gen-sharp",
	});
}

export default Component;
