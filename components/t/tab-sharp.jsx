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
		"content": `<style>.h5mnlg7fd {
  fill: currentColor;
  d: path("M3 19V5h18v14zm10-9h7V6h-7z");
}
</style><path class="h5mnlg7fd"/>`,
		"fallback": "material-symbols-light:tab-sharp",
	});
}

export default Component;
