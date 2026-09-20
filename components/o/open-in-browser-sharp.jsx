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
		"content": `<style>.r-v-4lmni {
  fill: currentColor;
  d: path("M3 21V3h18v18h-6v-2h4V7H5v12h4v2zm8 0v-6.15l-1.6 1.6L8 15l4-4l4 4l-1.4 1.45l-1.6-1.6V21z");
}
</style><path class="r-v-4lmni"/>`,
		"fallback": "material-symbols:open-in-browser-sharp",
	});
}

export default Component;
