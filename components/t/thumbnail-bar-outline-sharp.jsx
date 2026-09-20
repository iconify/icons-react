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
		"content": `<style>.crd57u6lx {
  fill: currentColor;
  d: path("M3 19V5h18v14zm6-1h11V6H9zm-1 0V6H4v12zm-4 0V6zm4 0h1zM8 6h1z");
}
</style><path class="crd57u6lx"/>`,
		"fallback": "material-symbols-light:thumbnail-bar-outline-sharp",
	});
}

export default Component;
