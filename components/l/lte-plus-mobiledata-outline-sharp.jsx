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
		"content": `<style>.wl7jcfu7c {
  fill: currentColor;
  d: path("M1 16V8h2v6h3v2zm6 0v-6H5V8h6v2H9v6zm5 0V8h5v2h-3v1h3v2h-3v1h3v2zm8-1v-2h-2v-2h2V9h2v2h2v2h-2v2z");
}
</style><path class="wl7jcfu7c"/>`,
		"fallback": "material-symbols:lte-plus-mobiledata-outline-sharp",
	});
}

export default Component;
