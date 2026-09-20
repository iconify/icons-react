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
		"content": `<style>.l2esorb9m {
  fill: currentColor;
  d: path("M3 21V3h18v9h-2V5H5v14h7v2zm11 0v-2h3.6L8.3 9.7l1.4-1.4l9.3 9.275V14h2v7z");
}
</style><path class="l2esorb9m"/>`,
		"fallback": "material-symbols:open-in-new-down-outline-sharp",
	});
}

export default Component;
