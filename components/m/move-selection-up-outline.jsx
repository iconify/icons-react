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
		"content": `<style>.e7zoa_byu {
  fill: currentColor;
  d: path("M6.962 13.077V3h10.077v10.077zm1-1h8.076V4H7.962zm7.846 4.962v-1.231h1.23v1.23zm-8.846 0v-1.231h1.23v1.23zM15.808 21v-1.23h1.23V21zm-4.424 0v-1.23h1.231V21zm-4.423 0v-1.23h1.231V21zM12 8.039");
}
</style><path class="e7zoa_byu"/>`,
		"fallback": "material-symbols-light:move-selection-up-outline",
	});
}

export default Component;
