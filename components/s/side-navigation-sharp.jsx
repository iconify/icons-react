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
		"content": `<style>.j9ldb98hx {
  fill: currentColor;
  d: path("M4 20V4h16v16zm8-1h7V5h-7z");
}
</style><path class="j9ldb98hx"/>`,
		"fallback": "material-symbols-light:side-navigation-sharp",
	});
}

export default Component;
