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
		"content": `<style>.l4m4gcb4g {
  fill: currentColor;
  d: path("M3 21V3h18v18zm8-6H5v4h6zm2 0v4h6v-4zm-2-2V9H5v4zm2 0h6V9h-6zM5 7h14V5H5z");
}
</style><path class="l4m4gcb4g"/>`,
		"fallback": "material-symbols:table-outline-sharp",
	});
}

export default Component;
