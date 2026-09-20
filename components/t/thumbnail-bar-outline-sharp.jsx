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
		"content": `<style>.bu3e3bbkv {
  fill: currentColor;
  d: path("M2 20V4h20v16zm8-2h10V6H10zm-2 0V6H4v12zm-4 0V6zm4 0h2zM8 6h2z");
}
</style><path class="bu3e3bbkv"/>`,
		"fallback": "material-symbols:thumbnail-bar-outline-sharp",
	});
}

export default Component;
