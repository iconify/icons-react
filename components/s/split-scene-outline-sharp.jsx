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
		"content": `<style>.c7nwiob9s {
  fill: currentColor;
  d: path("M4 19V5h5.116v1H5v12h4.116v1zm7.5 2V3h1v2H20v14h-7.5v2zm1-3H19V6h-6.5zM5 18V6zm14 0V6z");
}
</style><path class="c7nwiob9s"/>`,
		"fallback": "material-symbols-light:split-scene-outline-sharp",
	});
}

export default Component;
